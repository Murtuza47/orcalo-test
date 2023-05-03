import axios from "axios";
import { useEffect, useState } from "react"
import Table from "../Container/Table";
import { Input } from "../Container/Input";
import { Pagination } from "../Container/Pagination";
import Loader from "../Container/Loader";

export const Home = () => {

  const [data, setData] = useState([]);
  const [filteredDate, setFilteredData] = useState([])
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://tiny-plum-camel-cape.cyclic.app/v1/users?pageSize=100')
      .then(res => {
        setData(res.data);
        setIsLoading(false);

      }).catch(err => {
        console.log(err)
        setIsLoading(false);
      })
  }, [])

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  useEffect(() => {
    if (searchQuery.length > 0) {
      const copyData = [...data]
      const filteredPersons = copyData.filter(
        person => {
          return (
            person
              .name
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            person
              .email
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        }
      );
      setFilteredData(filteredPersons);
    }
  }, [searchQuery])

  const paginate = (array, page_size, page_number) => {
    return Array.from(array).slice((page_number - 1) * page_size, page_number * page_size);
  }

  return (
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', marginLeft: '300px', marginRight: '300px' }}>
      {isLoading
        ?
        <Loader />
        :
        <>
          <Input query={setSearchQuery} />
          <Table data={paginate(filteredDate, 5, pageNumber)} />
          <Pagination data={filteredDate} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
      }
    </div>
  )
}


