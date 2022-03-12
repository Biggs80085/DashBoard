import styled from "styled-components";
import { Visibility } from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    padding:20px;
    margin-right:20px;
`;
const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display:flex;
  flex-direction: column;
`;
const WidgetSmUsername = styled.span`
  font-weight:600;
`;
const WidgetSmUserTitle = styled.span`
  font-weight:300;
`;
const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

function WidgetSm() {
  return (
    <Container>
        <WidgetSmTitle>New Join Members</WidgetSmTitle>
        <WidgetSmList>
          <WidgetSmListItem>
            <WidgetSmImg src="./img/model.png"/>
            <WidgetSmUser>
              <WidgetSmUsername>Anna Keller</WidgetSmUsername>
              <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton>
              <Visibility style={{fontSize:16, marginRight: 5}} />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>

          <WidgetSmListItem>
            <WidgetSmImg src="./img/model.png"/>
            <WidgetSmUser>
              <WidgetSmUsername>Anna Keller</WidgetSmUsername>
              <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton>
              <Visibility style={{fontSize:16, marginRight: 5}} />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>

          <WidgetSmListItem>
            <WidgetSmImg src="./img/model.png"/>
            <WidgetSmUser>
              <WidgetSmUsername>Anna Keller</WidgetSmUsername>
              <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton>
              <Visibility style={{fontSize:16, marginRight: 5}} />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>

          <WidgetSmListItem>
            <WidgetSmImg src="./img/model.png"/>
            <WidgetSmUser>
              <WidgetSmUsername>Anna Keller</WidgetSmUsername>
              <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton>
              <Visibility style={{fontSize:16, marginRight: 5}} />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>

          <WidgetSmListItem>
            <WidgetSmImg src="./img/model.png"/>
            <WidgetSmUser>
              <WidgetSmUsername>Anna Keller</WidgetSmUsername>
              <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton>
              <Visibility style={{fontSize:16, marginRight: 5}} />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>
        </WidgetSmList>
    </Container>
  )
}

export default WidgetSm