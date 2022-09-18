import styled from 'styled-components';
import { useState, useEffect } from 'react'


const WrapContainer = styled.div`
  margin: 2em auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  border: 5px dotted red;
  background: white;
  border-radius: 10px;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 1.2em;
  border-radius: 20px;
`

const SubmitButton = styled.button`
  background: black;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 1.2em;
  border-radius: 20px;
  color: white;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

const formState = {
  contractAddress: '',
  tokenId: '',
  taxRate: 0,
  price: 0,
  taxLordesseAddress: '',
}

const Wrap = () => {
  const [form, setForm] = useState({formState})

  const updateForm = (update) => {
    setForm((prevState) => {
      const newState = {
        ...prevState,
        ...update,
      }
      return newState
    })
  }

  const harbergenete = () => {
    // TODO: contract stuffz
    console.log(form)
  }

  return (
    <WrapContainer>
      <label htmlFor="nft-address">NFT Contract Adress</label>
      <Input
        type="text"
        id="nft-address"
        name="nft-address"
        placeholder=" NFT Contract Address"
        onChange={({ target }) => updateForm({ contractAddress: target.value })}

      />

      <label htmlFor="token-id">Token ID</label>
      <Input type="text" id="token-id" name="oken-id" placeholder="Token ID" onChange={({ target }) => updateForm({ tokenId: target.value })} />

      <label htmlFor="name">Tax Rate</label>
      <Input
        type="text"
        id="tax-percentage"
        name="tax-percentage"
        placeholder="%"
        onChange={({ target }) => updateForm({ taxRate: target.value })}
      />

      <label htmlFor="name">Price</label>
      <Input
        type="text"
        id="price"
        name="price"
        placeholder="ETH"
        onChange={({ target }) => updateForm({ price: target.value })}
      />

      <label htmlFor="name">Tax Lordesse</label>
      <Input
        type="text"
        id="tax-beneficiary"
        name="tax-beneficiary"
        placeholder="Tax Lordesse"
        onChange={({ target }) => updateForm({ taxLordesseAddress: target.value })}
      />

      <SubmitButton onClick={harbergenete}>Harbergenerate!</SubmitButton>
    </WrapContainer>
  )
}

export default Wrap