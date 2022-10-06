import './ImageList.css';

const ImageList = (props) => {

  const images = props.images.map( ({alt_description, urls, id}) => {
    return <img src={urls.regular} alt={alt_description} key={id}/>
  })

  return ( 
    <div className="image-list">{images}</div>
   );
}
 
export default ImageList;
