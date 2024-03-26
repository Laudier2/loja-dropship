/* eslint-disable no-use-before-define */
/* eslint-disable no-dupe-keys */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";
import { CFontainerImageProduct, ConatinerModal } from './modal';
import api from '../../api/api';
import { toast } from 'react-toastify';
const Modal = () => {

  const localId = localStorage.getItem("id")

  const [images, setImages] = useState([]);
  const [imagesLista1, setLista1] = useState([]);
  const [imagesLista2, setLista2] = useState([]);
  const [imagesLista3, setLista3] = useState([]);
  const [imagesLista4, setLista4] = useState([]);
  const [imagesLista5, setLista5] = useState([]);
  const [imageUm, setImageUm] = useState([])
  const [imageDois, setImageDois] = useState([])
  const [imageTres, setImageTres] = useState([])
  const [imageQuantro, setImageQuantro] = useState([])
  const [imageSinco, setImageSinco] = useState([])
  const [name, setName] = useState([]);
  const [estrela, setEstrela] = useState([]);
  const [message, setMessage] = useState([]);
  const maxNumber = 69;
  
  //const [data, setData] = useState({});

  //console.log(imageUm)

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    
    setImages(imageList);
  };

  const onChange0 = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImageUm(imageList[0].data_url);
    
    setLista1(imageList);

    //console.log(imageList)
  };

  const onChangeS =(imageList, addUpdateIndex) => {
    // data for submit
    
    setImageSinco(imageList[0].data_url);
    setLista5(imageList);
  };
  const onChange1 = (imageList, addUpdateIndex) => {
    // data for submit
   
    setImageDois(imageList[0].data_url);
    setLista2(imageList);
  };

  const onChange2 = (imageList, addUpdateIndex) => {
    // data for submit
 
    setImageTres(imageList[0].data_url);
    setLista3(imageList);
  };

  const onChange3 = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImageQuantro(imageList[0].data_url);
    setLista4(imageList);
  };

  const onChange4 = (e) => {
    // data for submit
    
    setName(e);
  };
  const onChange5 = (e) => {
    // data for submit
    
    setEstrela(e);
  };
  const onChange6 = (e) => {
    // data for submit
    
    setMessage(e);
  };

  //const teste = JSON.stringify(images[0].data_url ? images[0].data_url : "")

  /*const handleImages = () => {

    const req = JSON.stringify(images)
    localStorage.setItem("img", req)
    
  }*/

  const dataList = {
    imgName: images,
    name: name,
    estrela: estrela,
    message: message,
    idProduct: localId
  }

  const handleProcess = async (e) => {

    e.preventDefault()

    if(imageUm){

      //console.log(dataList.image[0][0].data_url)

      //localStorage.setItem("imgZero", dataList.image[0][0].data_url == "" ? "" : dataList.image[0][0].data_url)
      //localStorage.setItem("imgUm",  dataList.image[1][0].data_url == "" ? "" : dataList.image[1][0].data_url)
      //localStorage.setItem("imgDois",  dataList.image[2][0].data_url == "" ? "" : dataList.image[2][0].data_url)
      //localStorage.setItem("imgTres",  dataList.image[3][0].data_url == "" ? "" : dataList.image[3][0].data_url)
//
      //const imgZero = localStorage.getItem("imgZero")
      //const imgUm = localStorage.getItem("imgUm")
      //const imgDois = localStorage.getItem("imgDois")
      //const imgTres = localStorage.getItem("imgTres")

      /*setTimeout(() => {
        return;
      }, 3000);*/

      //const imgTodos = dataList.image[0].map(img => img.data_url)

     /* const dataListPronto1 = {
        imgName: dataList.imgName[0].data_url,
        imageUm: imageUm[0].data_url,
        imageDois: imageDois[0].data_url,
        imageTres: imageTres[0].data_url,
        imageQuantro: imageQuantro[0].data_url,
        imageSinco: imageSinco[0].data_url,
        name: name,
        estrela: estrela,
        message: message,
        idProduct: localId
      }*/

      const dataListPronto = {
        imageUm: imageUm,
        imageDois: imageDois,
        imageTres: "imageTres[0].data_url",
        imageQuantro: "imageQuantro[0].data_url",
        imageSinco: "imageSinco[0].data_url",
        imgName: dataList.imgName[0].data_url,
        name: name,
        estrela: estrela,
        message: message,
        idProduct: localId
      }

      console.log(dataListPronto)
    
      await api.post("/comentario", dataListPronto).then((response) => {
       setTimeout(() => {
       }, 10000)

      toast.success(`Obrigado por da sua opinião!`)

        const dataRelations2 = {
          id_comentario: `${response.data.comentario.id}`,
          id_product: `${localId}`
        }
    
        api.post("/comentariorelation", dataRelations2).then((catego) => {
          toast.success(`O relacionamento foi feito!`)
        })
      })

      //console.log(dataList.image[0][0].data_url)
      console.log(dataListPronto)
    }else{
      console.log("Tem algo errado")
    }


   /* await api.post("/comentario", dataList).then((response) => {

      const dataRelations2 = {
        id_comentario: `${response.data.comentario.id}`,
        id_product: `${localId}`
      }
  
      api.post("/comentariorelation", dataRelations2).then((catego) => {
        toast.success(`O relacionamento foi feito!`)
      })
    })*/
  }

  return (
    <ConatinerModal>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <li className='liImageName'>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="">
                {imageList == "" ?
                <>
                   <button
                      className=''
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                    <div>
                      <ImCloudUpload style={{width: 210, height: 80, cursor: "pointer", margin: "auto", display: "flex"}}/>
                    </div>
                    </button>
                    &nbsp;
                </>
                : 
               
                imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="200" height="200" style={
                        {borderRadius: "100px", border: "solid 1px", padding: "10px", margin: "5px"}
                      }/>
                    </div>
                    
                    <div>
                    <button style={
                      {width: 160, fontSize: 15, fontWeight: "bold", margin: "auto", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px", margin: "auto", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px"}
                      } onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
                Coloque uma imagem sua
              </div>
            )}
          </ImageUploading>
          </li>
          <li>
            {' '}
            <input type="text" placeholder='Seu nome' name='name' onChange={(e) => onChange4(e.target.value)} />
          </li>
          <li>
            <input type="text" placeholder='quantas estrelas' name='estrela' onChange={(e) => onChange5(e.target.value)} />
          </li>
          <li>
            <textarea type="text" maxlength="200" placeholder='Seu nome' name='message' onChange={(e) => onChange6(e.target.value)} />
          </li>
        </ul>
        <CFontainerImageProduct>
        <h5>Imagem do produto</h5>
        <div className='imageName'>
          <ImageUploading
            multiple
            value={imagesLista1}
            onChange={onChange0}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="">
                <button
                  className=''
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                <div>
                  <ImCloudUpload style={{width: 30, height: 30, cursor: "pointer", margin: "auto", display: "flex"}}/>
                </div>
                </button>
                &nbsp;
                <br />
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="100" height="100" style={{margin: "auto", display: "flex"}}/>
                    </div>
                    
                    <div>
                    <button style={{width: 80, fontSize: 15, fontWeight: "bold", margin: "7px", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px"}} onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
              
              </div>
            )}
          </ImageUploading>
          <ImageUploading
            multiple
            value={imagesLista2}
            onChange={onChange1}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="">
                <button
                  className=''
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                <div>
                  <ImCloudUpload style={{width: 30, height: 30, cursor: "pointer", margin: "auto", display: "flex"}}/>
                </div>
                </button>
                &nbsp;
                <br />
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="100" height="100" style={{margin: "auto", display: "flex"}}/>
                    </div>
                    
                    <div>
                    <button style={{width: 80, fontSize: 15, fontWeight: "bold", margin: "7px", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px"}} onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
              
              </div>
            )}
          </ImageUploading>
          </div>
          
        </CFontainerImageProduct>
            <button type="submit" className='btnEnviar' onClick={handleProcess}>Enviar</button>
      </div>
    </ConatinerModal>
  );
};

export default Modal;
