const ImageList = (props) => {

  const images = props.images.map((image, i) => {
    return <img src={image.urls.regular} alt={image.alt_description} key={i}/>
  })

  return ( 
    <div>{images}</div>
   );
}
 
export default ImageList;
