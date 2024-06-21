import React from 'react'
import * as Styled from './styles'
import { Product } from '../../interfaces/product'

interface ProductListProps {
    products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price)

    return (
        <Styled.Table>
            <thead>
                <Styled.TableRow>
                    <Styled.Th>Nome</Styled.Th>
                    <Styled.Th>Valor</Styled.Th>
                    <Styled.Th>Descrição</Styled.Th>

                </Styled.TableRow>
            </thead>
            <Styled.TableBody>
                {sortedProducts.map((product, index) => (
                    <Styled.TableRow key={index}>
                        <Styled.Td>{product.name}</Styled.Td>
                        <Styled.Td>{product.price}</Styled.Td>
                        <Styled.Td>{product.description}</Styled.Td>
                    </Styled.TableRow>
                ))}
            </Styled.TableBody>
        </Styled.Table>
    )
}

export default ProductList
