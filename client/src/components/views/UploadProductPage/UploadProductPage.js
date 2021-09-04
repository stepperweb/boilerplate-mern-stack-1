import React, {useState} from "react";
import {Typography, Button, Form, Input} from "antd";
import FileUpload from '../../utils/FileUpload'

const {Title} = Typography
const {TextArea} = Input


const Continents = [
  {key: 1, value : "Africa"},
  {key: 2, value : "Europe" },
  {key: 3, value : "Asia"},
  {key: 4, value : "North America" },
  {key: 5, value : "South America"},
  {key: 6, value : "Australia" },
  {key: 7, value : "Antarctica"},
]

function UploadProductPage() {
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Images, setImages] = useState([])

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value)
    console.log(Title)
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value)
    console.log(Description)
  }

  const priceChangeHandler = (event) => {
    setPrice(event.currentTarget.value)
    console.log(Price)
  }

  const continentChangeHandler = (event) => {
    setContinent(event.currentTarget.value)
    console.log(Continent)
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 lavel={2}>여행상품 업로드</h2>
      </div>

      <Form action="">
        {/* {Dropzone} */}
        <FileUpload />


        <br />
        <br />
        <label htmlFor="">이름</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label htmlFor="">설명</label>
        <TextArea onChange={descriptionChangeHandler} value={Description} />
        <br />
        <br />
        <label htmlFor="">가격</label>
        <Input type="number" onChange={priceChangeHandler} value={Price} />
        <br />
        <br />
        <select onChange={continentChangeHandler} value={Continent}>
          {Continents.map(item => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
        <br />
        <br />
        <Button>확인</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
