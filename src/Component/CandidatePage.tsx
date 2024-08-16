import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Select,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  SelectChangeEvent
} from '@mui/material'
import { styled } from '@mui/system'

const CandidateContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

const MainContent = styled(Box)({
  flexGrow: 1
})

const TableHeader = styled(TableCell)({
  color: '#fff',
  backgroundColor: '#3a3a6a',
  fontWeight: 'bold'
})

const VoteButton = styled(Button)({
  backgroundColor: '#9d4edd',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#7b2cbf'
  }
})

const CandidateTable = styled(TableContainer)({
  marginTop: '20px'
})

const CandidateRow = styled(TableRow)({
  height: '80px',
  padding: '5px, 10px, 5px, 10px',
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgb(44, 35, 55)'
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'rgb(16, 1, 27)'
  }
})

// @TODO: Update to state variable when API is ready
const totalTableRows = 50
const rowsPerPage = 10

export const CandidatePage = () => {
  const [sortBy, setSortBy] = useState('President')
  const [page, setPage] = useState(1)

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value)
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <CandidateContainer>
      <MainContent>
        <Box display='flex' justifyContent='space-between' alignItems='center' mt={2}>
          <Typography variant='h6' color='white'>
            Presidential Candidates
          </Typography>
          <Select
            value={sortBy}
            onChange={handleSortChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort By' }}
            sx={{ color: '#fff', backgroundColor: '#3a3a6a' }}
          >
            <MenuItem value='President'>Sort By: President</MenuItem>
            <MenuItem value='Votes'>Sort By: Votes</MenuItem>
          </Select>
        </Box>
        <Paper>
          <CandidateTable>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Candidate</TableHeader>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Votes</TableHeader>
                  <TableHeader align='right'>Action</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(10)].map((_, index) => (
                  <CandidateRow key={index}>
                    <TableCell>
                      <Box display='flex' alignItems='center'>
                        <Avatar src='/static/images/avatar/1.jpg' sx={{ mr: 2 }} />
                        <Typography color='white'>Xi Jinping</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography color='white'>{index % 2 === 0 ? 1 : 6}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color='#E786FF'>#{index + 34500}</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <VoteButton>Vote</VoteButton>
                    </TableCell>
                  </CandidateRow>
                ))}
              </TableBody>
            </Table>
          </CandidateTable>
        </Paper>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
          <Button onClick={event => handlePageChange(event, page - 1)} disabled={page === 0} variant='contained'>
            Previous
          </Button>
          <Pagination
            count={9}
            page={page}
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              '& .MuiPaginationItem-root': {
                color: 'white',
                fontSize: '1.2rem', // Slightly larger font size
                margin: '0 8px' // Increased spacing between page numbers
              },
              '& .Mui-selected': {
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.12)'
              }
            }}
          />
          <Button
            onClick={event => handlePageChange(event, page + 1)}
            // @TODO: Later when API is ready
            // disabled={page >= Math.ceil(totalTableRows / rowsPerPage) - 1}
            disabled={false}
            variant='contained'
          >
            Next
          </Button>
        </div>
      </MainContent>
    </CandidateContainer>
  )
}
