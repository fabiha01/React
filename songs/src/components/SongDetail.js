import { connect } from 'react-redux';

const SongDetail = (props) => {
  console.log(props);
  const song = props.song;
  return ( 
    <div>Title: {song.title} Duration: {song.duration}</div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};
 
export default connect(mapStateToProps)(SongDetail);