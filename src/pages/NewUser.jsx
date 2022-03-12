import styled from "styled-components"

const Container = styled.div`
    flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
    display:flex;
    flex-wrap: wrap;
`;
const NewUserItem = styled.div`
    width:460px;
    display:flex;
    flex-direction:column;
    margin-top: 10px;
    margin-right:20px;
    &>label{
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(151, 150, 150);
    }
    &>input{
        height: 20px;
        padding:10px;
        border: 1px solid gray;
        border-radius: 5px;
    }
`;
const NewUserGender = styled.div`
    &>input{
        margin-top: 15px;
    }
    &>label{
        margin: 10px;
        font-size: 18px;
        color: #555;
    }
`;
const NewUserSelect = styled.select`
    height:40px;
    border-radius: 5px;
`;
const NewUserButton = styled.button`
    width: 200px;
    border: none; 
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`;

function NewUser() {
  return (
    <Container>
        <NewUserTitle>New User</NewUserTitle>
        <NewUserForm>
            <NewUserItem>
                <label>Username</label>
                <input type="text" placeholder="jon" />
            </NewUserItem>

            <NewUserItem>
                <label>Full Name</label>
                <input type="text" placeholder="jon Snow" />
            </NewUserItem>

            <NewUserItem>
                <label>Email</label>
                <input type="email" placeholder="jon@gmail.com" />
            </NewUserItem>

            <NewUserItem>
                <label>Password</label>
                <input type="password" placeholder="password" />
            </NewUserItem>

            <NewUserItem>
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 78" />
            </NewUserItem>

            <NewUserItem>
                <label>Address</label>
                <input type="text" placeholder="New York | USA" />
            </NewUserItem>

            <NewUserItem>
                <label>Gender</label>
                <NewUserGender>
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other"/>
                    <label for="other">Other</label>
                </NewUserGender>
            </NewUserItem>

            <NewUserItem>
                <label>Active</label>
                <NewUserSelect name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </NewUserSelect>
            </NewUserItem>
            <NewUserButton>Create</NewUserButton>
        </NewUserForm>
    </Container>
  )
}

export default NewUser