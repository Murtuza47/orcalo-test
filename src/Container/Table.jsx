const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.date_of_birth}</td>
            <td><img src={item.imageUrl} alt="" height='100px' width='100px' /></td>
          </tr>
        )
        )}
      </tbody>
    </table>
  )
}

export default Table;