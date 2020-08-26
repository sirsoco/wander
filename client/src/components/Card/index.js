import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
'mdbreact';

const CardExample = () => {
    
  return (
    <MDBRow style =>
      <MDBCol col='4'>
        <MDBCard narrow>
          <MDBCardImage
            className='view view-cascade gradient-card-header purple-gradient'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Mattonit</h2>
            <p>The Boar</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating size='sm'>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating size='sm'>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating size='sm'>
                <MDBIcon fab icon='google-plus-g' size="lg"/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
              dignissimos neque rem nihil ratione est placeat vel, natus non
              quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4'>
        <MDBCard wide>
          <MDBCardImage
            className='view view-cascade gradient-card-header peach-gradient'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive mb-2'>Title of the news</h2>
            <p>
              <MDBIcon icon='calendar-alt' /> 26.07.2017
            </p>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
              dignissimos neque rem nihil ratione est placeat vel, natus non
              quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
              nostrum.
            </MDBCardText>
            <a
              href='!#'
              className='orange-text mt-1 d-flex justify-content-end align-items-center'
            >
              <h5 className=''>
                Read more{' '}
                <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4'>
        <MDBCard>
          <MDBCardImage
            className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
            tag='div'
          >
            <h2>Marta</h2>
            <p>Deserves her own card</p>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
              dignissimos neque rem nihil ratione est placeat vel, natus non
              quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
              nostrum.
            </MDBCardText>
            <hr />
            <div className='text-center'>
              <MDBIcon fab icon='twitter' className='tw-ic mr-3' size='lg' />
              <MDBIcon
                fab
                icon='linkedin-in'
                className='li-ic my-3'
                size='lg'
              />
              <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default Card;