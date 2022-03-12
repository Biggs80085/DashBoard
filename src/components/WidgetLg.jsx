import styled from "styled-components"

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    padding:20px;
`;
const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgUser = styled.td`
  display:flex;
  align-items:center;
  font-weight:600;
`;
const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px; 
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const WidgetLgName = styled.span``;
const WidgetLgDate = styled.td``;
const WidgetLgAmount = styled.td``;
const WidgetLgStatus = styled.td``;

const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: #${ props => props.backgroundColor};
  color: #${ props => props.color};
`;

function WidgetLg() {
  const Button = ({type, backgroundColor, color}) =>{
    return <WidgetLgButton type={type} color={color} backgroundColor={backgroundColor}>{type}</WidgetLgButton>
  }
  return (
    <Container>
        <WidgetLgTitle>Latest transactions</WidgetLgTitle>
        <WidgetLgTable>
          <WidgetLgTr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="./img/model.png"/>
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>

            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Button type="Approved" backgroundColor="e5faf2" color="3bb077"/>
            </WidgetLgStatus>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="./img/model.png"/>
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>

            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Button type="Declined" backgroundColor="fff0f1" color="d95087"/>
            </WidgetLgStatus>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="./img/model.png"/>
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>

            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Button type="Pending" backgroundColor="ebf1fe" color="2a7ade"/>
            </WidgetLgStatus>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="./img/model.png"/>
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>

            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Button type="Approved" backgroundColor="e5faf2" color="3bb077"/>
            </WidgetLgStatus>
          </WidgetLgTr>
        </WidgetLgTable>
    </Container>
  )
}

export default WidgetLg