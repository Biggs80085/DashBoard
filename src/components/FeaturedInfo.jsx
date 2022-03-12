import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const FeaturedItem = styled.div`
    flex:1;
    margin:0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor:pointer; 
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
`;
const FeaturedTitle = styled.span`
    font-size:20px;
`;
const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display:flex;
    align-items: center;
`;
const FeaturedMoney = styled.span`
    font-size: 20px;
    font-weight: 600;
`;
const FeaturedMoneyRate = styled.span`
    display:flex;
    align-items:center;
    margin-left: 20px;
`;
const FeaturedSub = styled.span`
    font-size:15px;
    color:gray;
`;

function FeaturedInfo() {
  return (
    <Container>
        <FeaturedItem>
            <FeaturedTitle>Revanue</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>$2,415</FeaturedMoney>
                <FeaturedMoneyRate>
                    -11.4 <ArrowDownward style={{ fontSize:14, marginLeft: 5, color:'red'}} />
                </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedTitle>Sales</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>$4,415</FeaturedMoney>
                <FeaturedMoneyRate>
                    -1.4 <ArrowDownward style={{ fontSize:14, marginLeft: 5, color:'red'}}/>
                </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedTitle>Cost</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>$2,225</FeaturedMoney>
                <FeaturedMoneyRate>
                    +2.4 <ArrowUpward style={{ fontSize:14, marginLeft: 5, color:'green'}}/>
                </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
    </Container>
  )
}

export default FeaturedInfo