import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableBody = styled.tbody``

export const Th = styled.th`
    border: 1px solid #ccc;
    padding-inline: 3rem;
    padding-block: 1rem;
    background-color: transparent;
    text-align: center;
`

export const TableRow = styled.tr`
    background-color: #f8f8f8;
    &:nth-child(even) {
        background-color: #dce0e9;
    }
`

export const Td = styled.td`
    text-align: center;
    border: 1px solid #ccc;
    padding: 8px;
`
