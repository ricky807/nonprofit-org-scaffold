import React from 'react'

import Banner from '../components/Global/Banner'

import hapbackgroundimage from '../images/hapbackgroundimage.webp'

import haplogoonly from '../images/haplogoonly.webp'

import { Image } from '../components/Global/Image'

import styled from 'styled-components'

export default function addtohap() {
  return (
    <div>
      <Banner height={'25vh'} backgroundImage={hapbackgroundimage} backgroundColor='white'>
        <BannerContent>
          <Image src={haplogoonly} />
          <h1><strong>Register a New Housing Resource</strong></h1>
        </BannerContent>
      </Banner>
    </div>
  )
}

const BannerContent = styled.div`

  font-weight: 1000;
  font-size: larger;
  color: ${props => props.theme.darkblue};

  display: flex;
  align-items: center;

  gap: 1rem;

`