function Item({ data, modal }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.Name}</td>
        <td>{data.Class}</td>
        <td>{data.Value}</td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button>
      </tr>
    );
  }
  
  export default Item;
  