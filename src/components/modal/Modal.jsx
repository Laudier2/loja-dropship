import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";
import { CFontainerImageProduct, ConatinerModal } from './modal';
import api from '../../api/api';
import { toast } from 'react-toastify';
//import api from '../../api/api';
//import { toast } from 'react-toastify';

const Modal = () => {

  const localId = localStorage.getItem("id")

  const [images, setImages] = useState([]);
  const [images0, setImages0] = useState([]);
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [name, setName] = useState([]);
  const [estrela, setEstrela] = useState([]);
  const [message, setMessage] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    
    setImages(imageList);
  };

  const onChange0 = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImages0(imageList);
  };

  const onChange1 = (imageList, addUpdateIndex) => {
    // data for submit
   
    setImages1(imageList);
  };

  const onChange2 = (imageList, addUpdateIndex) => {
    // data for submit
 
    setImages2(imageList);
  };

  const onChange3 = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImages3(imageList);
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
    image: [images0,images1,images2,images3],
    name: name,
    estrela: estrela,
    message: message,
    idProduct: localId
  }

  const handleProcess = async (e) => {

    e.preventDefault()

    if(dataList.image[0]){

      localStorage.setItem("imgZero", dataList.image[0][0].data_url)
      localStorage.setItem("imgUm", dataList.image[1][0].data_url)
      localStorage.setItem("imgDois", dataList.image[2][0].data_url)
      localStorage.setItem("imgTres", dataList.image[3][0].data_url)

      const imgZero = localStorage.getItem("imgZero")
      const imgUm = localStorage.getItem("imgUm")
      const imgDois = localStorage.getItem("imgDois")
      const imgTres = localStorage.getItem("imgTres")

      setTimeout(() => {
        return;
      }, 3000);

      const dataListPronto = {
        imgName: dataList.image[0][0].data_url,
        image: [`${imgZero}`,`${imgUm}`,`${imgDois}`,`${imgTres}`],
        name: name,
        estrela: estrela,
        message: message,
        idProduct: localId
      }

      /*await api.post("/comentario", dataListPronto).then((response) => {

        const dataRelations2 = {
          id_comentario: `${response.data.comentario.id}`,
          id_product: `${localId}`
        }
    
        api.post("/comentariorelation", dataRelations2).then((catego) => {
          toast.success(`O relacionamento foi feito!`)
        })
      })*/

      //console.log(dataList.image[0][0].data_url)
      console.log(dataListPronto)
    }else{
      console.log("Tem algo errado")
    }


    /*await api.post("/comentario", dataList).then((response) => {

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
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="220" height="100"/>
                    </div>
                    
                    <div>
                    <button style={{width: 160, fontSize: 15, fontWeight: "bold"}} onClick={() => onImageRemove(index)}>
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
            <textarea type="text" placeholder='Seu nome' name='message' onChange={(e) => onChange6(e.target.value)} />
          </li>
        </ul>
        <CFontainerImageProduct>
        <h5>Imagem do produto</h5>
        <div className='imageName'>
          <ImageUploading
            multiple
            value={images0}
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
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div>
                    <button style={{width: 160, fontSize: 15, fontWeight: "bold"}} onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
              
              </div>
            )}
          </ImageUploading>
          </div>
          <div className='imageName'>
          <ImageUploading
            multiple
            value={images1}
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
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div>
                    <button style={{width: 160, fontSize: 15, fontWeight: "bold"}} onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
              
              </div>
            )}
          </ImageUploading>
          </div>
          <div className='imageName'>
          <ImageUploading
            multiple
            value={images2}
            onChange={onChange2}
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
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div>
                    <button style={{width: 160, fontSize: 15, fontWeight: "bold"}} onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
              
              </div>
            )}
          </ImageUploading>
          </div>
          <div className='imageName'>
          <ImageUploading
            multiple
            value={images3}
            onChange={onChange3}
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
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div>
                    <button style={{width: 160, fontSize: 15, fontWeight: "bold"}} onClick={() => onImageRemove(index)}>
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
