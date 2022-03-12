import styled from "styled-components"

const Container = styled.div`
    flex:4;
`;
const NewProductTitle = styled.h1``;
const NewProductForm = styled.form`
    margin-top: 10px;
`;
const NewProductItem = styled.div`
    width:250px;
    display:flex;
    flex-direction:column;
    margin-bottom: 10px;
    &>label{
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(151, 150, 150);
    }
    &>input{
        padding:10px;
    }
    &>select{
        padding: 10px;
    }
`;
const NewProductButton = styled.button`
    border: none; 
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
`;

function NewProduct() {
  return (
    <Container>
        <NewProductTitle>New Product</NewProductTitle>
        <NewProductForm>
            <NewProductItem>
                <label>Image</label>
                <input type="file" placeholder="file" />
            </NewProductItem>

            <NewProductItem>
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods" />
            </NewProductItem>

            <NewProductItem>
                <label>Stock</label>
                <input type="text" placeholder="123" />
            </NewProductItem>

            <NewProductItem>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </NewProductItem>
            <NewProductButton>Create</NewProductButton>
        </NewProductForm>
    </Container>
  )
}

export default NewProduct