import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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

const location = useLocation();
const userId = location.pathname.split("/")[2];

const user = useSelector((state) =>
    state.users.users.find((user) => user._id === userId)
);
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
                    <UserShowImg src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg"/>
                    <UserShowTopTitle>
                        <UserShowUsername>{user.userName.name + " " + user.userName.lastName}</UserShowUsername>
                        <UserShowUserTitle>{ user.isAdmin ? "Admin" : "Not Admin" }</UserShowUserTitle>
                    </UserShowTopTitle>
                </UserShowTop>
                <UserShowBottom>
                    <UserShowTitle>Account Details</UserShowTitle>
                    <UserShowInfo>
                        <PermIdentity style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>{user._id}</UserShowInfoTitle>
                    </UserShowInfo>

                    <UserShowTitle>Contact Details</UserShowTitle>
                    
                    <UserShowInfo>
                        <MailOutline style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>{user.email}</UserShowInfoTitle>
                    </UserShowInfo>

                    <UserShowInfo>
                        <LocationSearching style={{ fontSize: 16 }}/>
                        <UserShowInfoTitle>{user.addresse[0].city + " | " + user.addresse[0].country}</UserShowInfoTitle>
                    </UserShowInfo>
                </UserShowBottom>
            </UserShow>
            <UserUpdate>
                <UserUpdateTitle>Edit</UserUpdateTitle>
                <UserUpdateForm>
                    <UserUpdateLeft>
                        <UserUpdateItem>
                            <label>Nom</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder={user.userName.lastName}
                            />
                        </UserUpdateItem>

                        <UserUpdateItem>
                            <label>Prénom</label>
                            <UserUpdateInput 
                                type="text"
                                placeholder={user.userName.name}
                            />
                        </UserUpdateItem>

                        <UserUpdateItem>
                            <label>Email</label>
                            <UserUpdateInput 
                                type="email"
                                placeholder={user.email}
                            />
                        </UserUpdateItem>

                    </UserUpdateLeft>
                    <UserUpdateRight>
                        <UserUpdateImg src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg"/>
                        <UserUpdateButton>Update</UserUpdateButton>
                    </UserUpdateRight>
                </UserUpdateForm>
            </UserUpdate>
        </UserContainer>
    </Container>
  )
}

export default User