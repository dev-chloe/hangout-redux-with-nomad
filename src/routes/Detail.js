import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <p>Created at: {toDo?.id}</p>
    </>
  );
}

function mapDispatchToProps(state) {
  return {toDos: state};
}

export default connect(mapDispatchToProps)(Detail);