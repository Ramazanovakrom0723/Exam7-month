import { Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { ProductsModal } from "@modal";
import LogOut from "../../components/modal/logout";
import { ProductTable } from "../../components/ui";
import { products } from "@service";
import Pagination from "@mui/material/Pagination";

function Index() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    limit: 5,
    page: 1,
  });


  const getData = async () => {
    try {
      const response = await products.get({
        ...params, 
      }); 
      if (response.status === 200 && response?.data?.products) {
        setData(response?.data?.products);
        let total = Math.ceil(response?.data?.total_count / params.limit);
        setCount(total);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event, value) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value,
    }));
  };
  

  useEffect(() => {
    getData();
  }, [params]);

  return (
    <>
      <div className="top">
        <p>Product</p>
        <LogOut />
      </div>
      <ProductsModal open={open} handleClose={() => setOpen(false)} />
      <div className="flex justify-between items-center my-5">
        <div className="w-[400px]">
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              startAdornment: (
                <Search className="h-5 w-5 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
              ),
              disableUnderline: true,
              style: {
                padding: "4px 36px 4px 12px",
                fontSize: "12px",
                height: "35px",
              },
            }}
          />
        </div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Products
        </Button>
      </div>
      <ProductTable data={data} />
      <Pagination count={count} page={params.page} onChange={handleChange} />

    </>
  );
}

export default Index;
