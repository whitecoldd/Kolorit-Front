import React from 'react'
import {Container} from 'react-bootstrap'
import { Header, Grid, Item, Table, Label } from "semantic-ui-react"
import ItemModel from '../comps/ItemModel'

const Compare = ({selectedItems, Items, addToCompare, removeFromCompare, onAdd, onRemoveFromPage}) => {
    return (
        <Container>
            <div>
                <Header
                    as="h1"
                    content="Compare Items"
                    textAlign="center"
                />
                {selectedItems.length > 0 && (
                    <Table definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell></Table.HeaderCell>
                                {selectedItems.map((Items) => (
                                    <Table.HeaderCell key={Items.id}>{Items.name}</Table.HeaderCell>
                                ))}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Label color="orange" ribbon>
                                        Price
                                    </Label>
                                </Table.Cell>
                                {selectedItems.map((Items) => (
                                    <Table.Cell key={Items.id}>{Items.salePrice}</Table.Cell>
                                ))}
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Label color="teal" ribbon>
                                        Description
                                    </Label>
                                </Table.Cell>
                                {selectedItems.map((Items) => (
                                    <Table.Cell key={Items.id}>{Items.description}</Table.Cell>
                                ))}
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Label color="pink" ribbon>
                                        Condition
                                    </Label>
                                </Table.Cell>
                                {selectedItems.map((Items) => (
                                    <Table.Cell key={Items.id}>{Items.code}</Table.Cell>
                                ))}
                            </Table.Row>
                        </Table.Body>
                    </Table>
                )}
                <Grid columns={selectedItems.length} stackable padded divided>
                    <Item.Group className='d-flex flex-wrap'>
                        {Items.map((Items) => (
                            <ItemModel
                                key={Items.id}
                                Items={Items}
                                selected={selectedItems}
                                addToCompare={addToCompare}
                                removeFromCompare={removeFromCompare}
                                onAdd={onAdd}
                                onRemoveFromPage={onRemoveFromPage}
                            />
                        ))}
                    </Item.Group>
                </Grid>
            </div>
        </Container>
    )
}

export default Compare