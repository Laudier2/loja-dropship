import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";
import { ConatinerModal } from './modal';

const Modal = ({ dados }) => {

  console.log(dados);

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  /*const handleImages = () => {

    const req = JSON.stringify(images)
    localStorage.setItem("img", req)
    
  }*/

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
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div className="container col-7 mt-2">
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
            <input type="text" placeholder='Seu nome' />
          </li>
          <li>
            <input type="text" placeholder='quantas estrelas' />
          </li>
          <li>
            <textarea type="text" placeholder='Seu nome' />
          </li>
        </ul>
        <div className='imageName'>
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
                  <ImCloudUpload style={{width: 30, height: 30, cursor: "pointer", margin: "auto", display: "flex"}}/>
                </div>
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div className="container col-7 mt-2">
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
                  <ImCloudUpload style={{width: 30, height: 30, cursor: "pointer", margin: "auto", display: "flex"}}/>
                </div>
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div className="container col-7 mt-2">
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
                  <ImCloudUpload style={{width: 30, height: 30, cursor: "pointer", margin: "auto", display: "flex"}}/>
                </div>
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div className="container col-7 mt-2">
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
                  <ImCloudUpload style={{width: 30, height: 30, cursor: "pointer", margin: "auto", display: "flex"}}/>
                </div>
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="160" height="100"/>
                    </div>
                    
                    <div className="container col-7 mt-2">
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
      </div>
    </ConatinerModal>
  );
};

export default Modal;
