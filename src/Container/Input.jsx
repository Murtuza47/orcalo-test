export const Input = ({ query }) => {
  return (
    <div style={{ marginBottom: '10px', marginTop: '10px' }}>
      <input onChange={(e) => { query(e.target.value) }} style={{ height: '40px', width: '500px', fontSize: 'large' }} placeholder="Search" />
    </div>
  )

}
