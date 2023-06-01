import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import "./UploadMusic.css";
import images from "./../../Assets/images/player.png";
import { APIConstants, assetURL } from "../../Services/api-constants";
import { useNavigate } from "react-router";
import Success from "../../Assets/Assets/CardImages/Success.png";
import edit from "./../../Assets/EditIcon.png";
import Web3 from "web3";
import { useSelector } from "react-redux";
import uploadaudio from "../../Assets/images/uploadaudio.png";
import uploadaudio1 from "../../Assets/images/uploadaudio1.png";
import successaudio from "../../Assets/images/successaudio.png";
import uploaddoc from "../../Assets/images/uploaddoc.png";
import uploaddoc1 from "../../Assets/images/uploaddoc1.png";
import uploaddoc2 from "../../Assets/images/uploaddoc2.png";
import defaultImage from "../../Assets/images/imageDefault.png";
import FormField from "../../Components/Atoms/FormField/FormField.js";
import LoginButton from "../../Components/Atoms/LoginButton/LoginButton";
import * as Yup from "yup";
import { useFormik } from "formik"
import {  uploadImage } from "../../helpers/hooks";
import { ethers } from "ethers";
import contractInstance from "../../web3";


// require("dotenv").config();
const httpUrlKey = "HTTP://127.0.0.1:7545";

const web3 = new Web3(new Web3.providers.HttpProvider(httpUrlKey));

function UploadMusic() {
  const { metaMaskDetails, adminDetails, userData } = useSelector(
    (store) => store.ReduxSlice.data
  );
  const walletId = adminDetails?.adminWalletAddress;
  const privateKey = adminDetails?.adminPrivateKey;
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState();
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [price, setPrice] = useState("");
  const [songName, setSongName] = useState("");
  const [songDes, setSongDes] = useState("");
  const [step, setStep] = useState(0);
  const [audioupload, setAudioUpload] = useState(false);
  const [sucess, setSucces] = useState(false);
  const [fileupload, setFileUpload] = useState(false);
  const [uploadPdfFile, setUploadPdfFile] = useState(false);
  const [doc, setDoc] = useState("");
  const [data, setData] = useState({});

  const fileUploadHandler = async (event, hook, properties) => {
    const hasFiles = event.target.files
    if (hasFiles.length > 0) {
      Promise.all(
        Object.values(hasFiles)?.map((file) => {
          const formData = new FormData();
          formData.append("file", file);
          return uploadImage(formData);
        })
      )
        .then((values) => {
          const images = values.map(({ data }) => data.link);
          hook(images[0]);
          if(properties) {
            properties(true)
          }
        })
        .catch((ex) => {})
        .finally(() => {
          setTimeout(() => {
          }, 2000);
        });
    }
  };

  const handleMouseEnter = () => {
    setAudioUpload(true);
  };

  const handleMouseLeave = () => {
    setAudioUpload(false);
  };

  const pdfhandleMouseEnter = () => {
    setFileUpload(true);
  };

  const pdfhandleMouseLeave = () => {
    setFileUpload(false);
  };

  // const AudioUpload = async (event) => {
  //   const file = event.target.files;
  //   if (file.length > 0) {
  //     let formData = new FormData();
  //     formData.append("file", file[0]);
  //     const response = await fetch(APIConstants.fileUpload, {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const json = await response.json();
  //     const validateJSON = json && json?.data ? json.data : "";
  //     setAudio(validateJSON);
  //   }
  // };
  const transfer = async () => {
    const nonce = await web3.eth.getTransactionCount(walletId, "latest");

    const value = web3.utils.toWei(
      ((Number(price) / 2) * 0.1).toString(),
      "Ether"
    );

    const transaction = {
      to: metaMaskDetails?.account,
      value: value,
      gasLimit: 6721975,
      gasPrice: 20000000000,
      nonce: nonce,
    };
    const signTxn = await web3.eth.accounts.signTransaction(
      transaction,
      privateKey
    );
    web3.eth.sendSignedTransaction(
      signTxn.rawTransaction,
      function (error, hash) {
        if (error) {
          console.log("Something went wrong");
        } else {
        }
      }
    );
  };
  const transectioncall = (description, price) => {
    const playload = {
      userId: userData._id,
      transactionDetails: [{
        type: "UploadMusic",
        subType: "--",
        description: description,
        amount: Number(price),
        status: 1,
      }]
    };

    axios
      .post(APIConstants.saveTransaction, playload)
      .then((res) => {
        console.log(res);
        // transfer()
        // handleTransfer()
        // transectioncall()
        setStep(1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleTransfer = async () => {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      try {
        const value = ethers.utils.parseEther("4");
        const res = await contractInstance.methods
          .sendMoney("0x922EcebF8D5fcA0771B4524BE2d3fEb94c6B6236")
          .send({
            from: accounts[0],
            value: value,
          });
        console.log(res);
      } catch (err) {
        alert(err);
      }
    }
  const navigateTo = useNavigate();
  const HandelBack = () => {
    navigateTo(-1);
  };
  const UploadAgain = () => {
    setStep(0);
    setImage("");
    setAudio("");
    setDoc("")
    formik.resetForm()
    setSucces(false);
    setUploadPdfFile(false)
  };

  const informationSchema = Yup.object().shape({
    albumName: Yup.string()
      .required("Album name is required")
      .matches(/^[a-zA-Z\s]+$/, "Field should only contain alphabets."),
    artistName: Yup.string()
      .required("Artist name is required")
      .matches(/^[a-zA-Z\s]+$/, "Field should only contain alphabets."),
    price: Yup.string()
      .required("Price is required")
      .matches(/^\d+(\.\d{1,2})?$/, "Field should only contain numbers."),
    songName: Yup.string()
      .required("Song name is required")
      .matches(/^[a-zA-Z\s]+$/, "Field should only contain alphabets."),
    description: Yup.string()
      .required("Description is required")
      .matches(/^[a-zA-Z\s]+$/, "Field should only contain alphabets."),
  });

  const autoFill=[
    {albumName: "Too Much",
    artistName: "Dimitri",
    price: 2,
    songThumbnail:"/uploads/64788afa864292bcc9bec8fa-Rectangle 38283.png",
    tune:["/uploads/64788b2c864292bcc9bec8fb-Too Much Dimitri Vegas Like Mike 128 Kbps.mp3"],
    copyrightFile: "/uploads/64788b7a864292bcc9bec8fc-1674044600880_Document%20Dec.pdf",
    songName: "Too Much",
    songDescription: "Nice Song",
    lyrics:"No"},


    {albumName: "Butter",
    artistName: "BTS",
    price: 3,
    songThumbnail:"/uploads/64788c9e864292bcc9bec8fd-Rectangle 38284.png",
    tune:["/uploads/64788cfc864292bcc9bec8fe-Butter Bts 128 Kbps.mp3"],
    copyrightFile: "/uploads/64788d25864292bcc9bec8ff-1674044600880_Document%20Dec (2).pdf",
    songName: "Butter",
    songDescription: "Beautiful Song",
    lyrics:"No"},
    
    {albumName: "Play Date",
    artistName: "Lilly Brooks",
    price: 1,
    songThumbnail:"/uploads/64788ee2864292bcc9bec901-Rectangle 38285.png",
    tune:["/uploads/64788f0a864292bcc9bec902-Play Date Lilly Brooks 128 Kbps.mp3"],
    copyrightFile: "/uploads/64788f2d864292bcc9bec903-1674044600880_Document%20Dec (9).pdf",
    songName: "Play Date",
    songDescription: "Extraordinary Song",
    lyrics:"No"},
  
  
    {albumName: "Up",
    artistName: "Cardi B",
    price: 4,
    songThumbnail:"/uploads/64789011864292bcc9bec904-Rectangle 38286.png",
    tune:["/uploads/6478902c864292bcc9bec905-Up Cardi B 128 Kbps.mp3"],
    copyrightFile: "/uploads/64789041864292bcc9bec906-1674044600880_Document%20Dec (8).pdf",
    songName: "Up",
    songDescription: "Folk Song",
    lyrics:"No"},
  
    {albumName: "Fake A Smile",
    artistName: "Alan Walker",
    price: 3,
    songThumbnail:"/uploads/647891ce864292bcc9bec90a-Rectangle 38287.png",
    tune:["/uploads/647891f7864292bcc9bec90b-Fake A Smile Alan Walker 128 Kbps.mp3"],
    copyrightFile: "/uploads/6478922c864292bcc9bec90c-1674044600880_Document%20Dec (7).pdf",
    songName: "Fake A Smile",
    songDescription: "Love Song",
    lyrics:"No"},
  
    {albumName: "Incomplete",
    artistName: "Jay Seen",
    price: 3,
    songThumbnail:"/uploads/64789316864292bcc9bec90f-Rectangle 38288.png",
    tune:["/uploads/6478934a864292bcc9bec910-Incomplete Jay Sean 128 Kbps.mp3"],
    copyrightFile: "/uploads/64789365864292bcc9bec911-1674044600880_Document%20Dec (6).pdf",
    songName: "Incomplete",
    songDescription: "Feel Song",
    lyrics:"No"},

    {albumName: "You",
    artistName: "Benny Blanco",
    price: 4,
    songThumbnail:"/uploads/6478948b864292bcc9bec912-Rectangle 38289.png",
    tune:["/uploads/647894a2864292bcc9bec913-You Benny Blanco 128 Kbps.mp3"],
    copyrightFile: "/uploads/647894b5864292bcc9bec914-1674044600880_Document%20Dec (4).pdf",
    songName: "You",
    songDescription: "Beet Song",
    lyrics:"No"},

    {albumName: "Your Power",
    artistName: "Billie Eilish",
    price: 3,
    songThumbnail:"/uploads/64789543864292bcc9bec915-Rectangle 38290.png",
    tune:["/uploads/6478955c864292bcc9bec916-Your Power Billie Eilish 128 Kbps.mp3"],
    copyrightFile: "/uploads/64789573864292bcc9bec917-1674044600880_Document%20Dec (5).pdf",
    songName: "Your Power",
    songDescription: "Motivational Song",
    lyrics:"No"},

    {albumName: "What Other People Say",
    artistName: "Lyrics Demi Lovato & Sam Fischer",
    price: 2,
    songThumbnail:"/uploads/6478968c864292bcc9bec918-Rectangle 38291.png",
    tune:["/uploads/647896a5864292bcc9bec919-What Other People Say Sam Fischer 128 Kbps.mp3"],
    copyrightFile: "/uploads/647896bc864292bcc9bec91a-1674044600880_Document%20Dec (3).pdf",
    songName: "What Other People Say",
    songDescription: "Hip hop music",
    lyrics:"No"},

    {albumName: "Anyone",
    artistName: "Justin Bieber",
    price: 1,
    songThumbnail:"/uploads/64789726864292bcc9bec91c-Rectangle 38292.png",
    tune:["/uploads/6478976d864292bcc9bec91d-Anyone Justin Bieber 128 Kbps.mp3"],
    copyrightFile: "/uploads/64789784864292bcc9bec91e-1674044600880_Document%20Dec (1).pdf",
    songName: "Anyone",
    songDescription: "Rock music",
    lyrics:"No"}

  ]


  const handleSubmit =async () => {
    const values=formik.values
    console.log(values)
    const reqBody = {
      albumName: values.albumName,
      artistName: values.artistName,
      price: Number(values.price),
      songName: values.songName,
      songDescription: values.description,
      tune: [audio],
      songThumbnail: image,
      userId: userData._id,
      copyrightFile: doc,
      userWalletId:metaMaskDetails.account,
      lyrics:"No"
    };
   
    console.log(reqBody)
    axios
      .post(APIConstants.formUpload, reqBody)
      .then((res) => {
        console.log(res);
        transectioncall(values.description, values.price);
        setStep(1);
      })
      .catch((err) => {
        alert("Please fill all the fields");
        console.log(err.message);
      });
  }

  const formik = useFormik({
    initialValues: {
      albumName: "",
      artistName: "",
      price: "",
      songName: "",
      description: "",
    },
    validationSchema: informationSchema,
    onSubmit: handleSubmit
  });

  useEffect(() => {
    const index =Math.floor(Math.random() * autoFill.length)
    const values=autoFill[index]
    setImage(values.songThumbnail)
    setSucces(true);
    setUploadPdfFile(true);
    setAudio(values.tune[0])
    setDoc(values.copyrightFile)
    formik.setValues({
      albumName: values.albumName,
      artistName: values.artistName,
      songThumbnail:values.songThumbnail,
      tune: values.tune,
      copyrightFile:values.copyrightFile,
      price: values.price,
      songName: values.songName,
      description: values.songDescription,
    })
    
  }, []);

  return (
    <>
      {step === 0 && (
        <div className="flex flex-row justify-center my-[75px]">
          <div className="w-[1000px] bg-iWhite shadow-2xl rounded-2xl p-[38px]">
            <button onClick={HandelBack}>
              <BiLeftArrowAlt size={34} className="mb-[33px] -ml-[20px]" />
            </button>
            <div className="flex flex-row items-center justify-center -mt-[60px] mb-[40px]">
              <h6 className="text-[28px] text-iBlue">Upload Music</h6>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-[323px] ml-[13px] border-iBlue border-2 rounded-3xl">
                <div className="flex flex-col items-center gap-[15px] ">
                  <h1 className="text-[28px] text-iBlue pt-2.5">
                    Upload Cover Photo
                  </h1>
                  <div className="w-[156px] h-[165px] border-iBlue relative border-2 rounded-2xl flex flex-row items-center justify-center">
                    {!image ? (
                      <div>
                        <img
                          src={defaultImage}
                          alt=""
                          className="w-[43px] h-[43px]"
                        />
                      </div>
                    ) : (
                      <img
                        src={assetURL + image}
                        alt=""
                        className="w-[153px] h-[163px] rounded-2xl"
                      />
                    )}
                    <label htmlFor="photo">
                      <div className=" upload-img-div glass_effect glass_effect_border">
                        <span className="p-1 pl-2  bg-iWhite absolute -bottom-[13px] -right-[17px]">
                          <img
                            src={edit}
                            className="w-[21px] h-[21px]"
                            alt=""
                          />
                        </span>
                        <input
                          type="file"
                          id="photo"
                          onChange={(e) => fileUploadHandler(e, setImage, undefined)}
                          // accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mp3, .mkv, .ogg, .wmv"
                          className="mt-2 mb-5 upload_text_inp"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row justify-center items-center mt-[24px]">
                  <div className="flex flex-col">
                    <p className="text-[28px] text-cgy4">Jane William</p>
                    <p className="text-[20px] text-igray1 mt-[6px]">
                      Account ID: P1234
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mx-[15px] mt-10 mb-[40px] ">
                  <div className="h-[109px]">
                    <label
                      for="albumName"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Album Name
                    </label>
                    <FormField
                      name="albumName"
                      value={formik.values.albumName}
                      type="text"
                      autoComplete="off"
                      id="albumName"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Album Name"
                      error={
                        formik.touched.albumName && formik.errors.albumName
                      }
                      {...formik.getFieldProps("albumName")}
                    />
                  </div>

                  <div className="h-[109px]">
                    <label
                      for="artistName"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Artist Name
                    </label>
                    <FormField
                      name="artistName"
                      value={formik.values.artistName}
                      type="text"
                      id="artistName"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Artist Name"
                      error={
                        formik.touched.artistName && formik.errors.artistName
                      }
                      {...formik.getFieldProps("artistName")}
                    />
                  </div>

                  <div className="h-[109px]">
                    <label
                      for="price"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Price (ETH)
                    </label>
                    <FormField
                      name="price"
                      value={formik.values.price}
                      type="text"
                      id="price"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Price"
                      error={formik.touched.price && formik.errors.price}
                      {...formik.getFieldProps("price")}
                    />
                  </div>
                </div>
              </div>

              <div className="w-[589px] border-iBlue border-2 rounded-3xl pl-[55px] pt-[26px]">
                <label htmlFor="audio">
                  <div className="upload-img-div glass_effect glass_effect_border mt-[24px]">
                    <>
                      {!sucess ? (
                        audioupload ? (
                          <img
                            src={uploadaudio1}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          />
                        ) : (
                          <img
                            src={uploadaudio}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          />
                        )
                      ) : (
                        <img src={successaudio} />
                      )}
                    </>

                    <input
                      type="file"
                      id="audio"
                      onChange={(e) => fileUploadHandler(e, setAudio, setSucces)}
                      accept=".jpg, .jpeg, .png, .bmp, .gif, .mp3, .mkv, .ogg, .wmv"
                      className="mt-2 mb-5 upload_text_inp"
                    />
                  </div>
                </label>
                {/* <button
                type="button"
                className="flex flex-row items-center py-2.5 px-5 hover:bg-iOrange bg-iBlue text-iWhite text-[20px] rounded-lg"
              >
                <BsUpload size={33} className="px-2 font-bold" />            
              </button> */}

                <div className="flex flex-col gap-[17px]">
                  <div>
                    <p className="font-medium text-iBlue mt-[32px] text-[20px]">
                      Copy Rights Attachement
                    </p>
                    <label htmlFor="doc">
                      <div className="mt-4 upload-img-div glass_effect glass_effect_border">
                        <>
                          {!uploadPdfFile ? (
                            fileupload ? (
                              <img
                                src={uploaddoc1}
                                onMouseEnter={pdfhandleMouseEnter}
                                onMouseLeave={pdfhandleMouseLeave}
                              />
                            ) : (
                              <img
                                src={uploaddoc}
                                onMouseEnter={pdfhandleMouseEnter}
                                onMouseLeave={pdfhandleMouseLeave}
                              />
                            )
                          ) : (
                            <img src={uploaddoc2} />
                          )}
                        </>

                        <input
                          type="file"
                          id="doc"
                          onChange={(e) => fileUploadHandler(e, setDoc, setUploadPdfFile)}
                          accept=".pdf"
                          className="mt-2 mb-5 upload_text_inp"
                        />
                      </div>
                    </label>
                  </div>

                  <div></div>

                  <div className="h-[109px]">
                    <label
                      for="songName"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Song Name
                    </label>
                    <FormField
                      name="songName"
                      value={formik.values.songName}
                      type="text"
                      id="songName"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Song Name"
                      error={formik.touched.songName && formik.errors.songName}
                      {...formik.getFieldProps("songName")}
                    />
                  </div>

                  <div className="h-[180px]">
                    <label
                      for="description"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Description
                    </label>
                    <FormField
                      name="description"
                      value={formik.values.description}
                      id="description"
                      rows="4"
                      className="block w-[480px] h-[188px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-iGray4 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Description"
                      error={
                        formik.touched.description && formik.errors.description
                      }
                      {...formik.getFieldProps("description")}
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center mt-[73px]">
                  <LoginButton
                    // type="submit"
                    onClick={handleSubmit}
                    disable ={!(formik.dirty && formik.isValid)}
                    label="Submit"
                    className="py-3 mt-5 w-[305px] mb-[20px] center rounded-[30px] text-iWhite text-[20px]"
                  >
                    Submit
                  </LoginButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-row justify-center my-[173px]">
          <div className="w-[610px] bg-iWhite shadow-2xl rounded-2xl p-[38px] flex flex-col items-center">
            <img
              src={Success}
              alt="success"
              className="w-[88px] h-[88px] mb-[38px]"
            />
            <span className=" text-[28px] font-medium text-center w-[452px]">
              Your Song has been Uploaded successfully
            </span>
            <button
              onClick={UploadAgain}
              className=" mt-8 py-2 px-2 border border-[#295D93] rounded-md hover:border-iWhite hover:bg-iBlue text-iBlue hover:text-iWhite"
            >
              Upload New Song
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UploadMusic;
