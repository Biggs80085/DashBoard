import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    flex:4;
    padding: 20px;
`;
const UserTitleContainer =styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;
const UserTitle =styled.h1``;
const UserAddButton =styled.button`
    width: 80px;
    border:none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
`;
const UserContainer = styled.div`
    display:flex;
    margin-top:20px;
`;
const UserShow = styled.div`
    flex:1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
`;
const UserUpdate = styled.div`
    flex:2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,75);
    margin-left: 20px;
`;
const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`;
const UserShowBottom = styled.div`
    margin-top: 20px;
`;
const UserShowImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const UserShowTopTitle = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 20px;
`;
const UserShowUsername = styled.span`
    font-weight: 600;
`;
const UserShowUserTitle = styled.span``;
const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`;
const UserShowInfoTitle = styled.span`
    margin-left: 10px;
`;
const UserShowInfo = styled.div`
    display:flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`;
const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`;
const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateRight = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;
const UserUpdateItem = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 10px;
    &>label{
        margin-bottom: 5px;
        font-size:14px;
    }
`;
const UserUpdateInput = styled.input`
    border: none;
    width: 250px;
    height:30px;
    border-bottom: 1px solid gray;
`;
const UserUpdateUpload = styled.div`
    display:flex;
    align-items: center;
`;
const UserUpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;
const UserUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`;

function User() {
  return (
    <Container>
        <UserTitleContainer>
            <UserTitle>Edit User</UserTitle>
            <Link to="/newUser">
                <UserAddButton>Create</UserAddButton>
            </Link>
        </UserTitleContainer>
        <UserContainer>
            <UserShow>
                <UserShowTop>
                    <UserShowImg src="../img/model.png"/>
                    <UserShowTopTitle>
                        <UserShowUsername>Anna Becker</UserShowUsername>
                        <UserShowUserTitle>Software Engineer</UserShowUserTitle>
                    </UserShowTopTitle>
                </UserShowTop>
                <UserShowBottom>
                    <UserShowTitle>Account Details</UserShowTitle>
                    <UserShowInfo>
                        <PermIdentity style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
                    </UserShowInfo>

                    <UserShowInfo>
                        <CalendarToday style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
                    </UserShowInfo>

                    <UserShowTitle>Contact Details</UserShowTitle>
                    <UserShowInfo>
                        <PhoneAndroid style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>+1 123 456 78</UserShowInfoTitle>
                    </UserShowInfo>

                    <UserShowInfo>
                        <MailOutline style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
                    </UserShowInfo>

                    <UserShowInfo>
                        <LocationSearching style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
                    </UserShowInfo>
                </UserShowBottom>
            </UserShow>
            <UserUpdate>
                <UserUpdateTitle>Edit</UserUpdateTitle>
                <UserUpdateForm>
                    <UserUpdateLeft>
                        <UserUpdateItem>
                            <label>Username</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder="annabeck99"
                            />
                        </UserUpdateItem>

                        <UserUpdateItem>
                            <label>Full Name</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder="Anna Becker"
                            />
                        </UserUpdateItem>

                        <UserUpdateItem>
                            <label>Email</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder="annabeck99@gmail.com"
                            />
                        </UserUpdateItem>

                        <UserUpdateItem>
                            <label>Phone</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder="+1 123 456 78"
                            />
                        </UserUpdateItem>

                        <UserUpdateItem>
                            <label>Address</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder="New York | USA"
                            />
                        </UserUpdateItem>
                    </UserUpdateLeft>
                    <UserUpdateRight>
                        <UserUpdateUpload>
                            <UserUpdateImg src="../img/model.png"/>
                            <label htmlFor="file"><Publish style={{ cursor: "pointer" }}/></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </UserUpdateUpload>
                        <UserUpdateButton>Update</UserUpdateButton>
                    </UserUpdateRight>
                </UserUpdateForm>
            </UserUpdate>
        </UserContainer>
    </Container>
  )
}

export default User