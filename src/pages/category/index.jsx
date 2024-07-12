import { Button } from "@mui/material";
import { CategoryModal } from "@modal";
import { CategoryTable } from "@ui";
import { useEffect, useState } from "react";
import { category } from "../../service";
import "./category.css"
import LogOut from "../../components/modal/logout"
const Index = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await category.get();
      if (response.status === 200 && response?.data?.categories) {
        setData(response?.data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div className="top">
      <p>Category</p>
      <LogOut/>
      </div>
      <CategoryModal open={open} handleClose={() => setOpen(false)} />
      <div className=" flex flex-col gap-3">
        <div className="flex justify-end mr-5 mt-7">
          <Button variant="contained" onClick={() => setOpen(true)}>
            To add
          </Button>
        </div>
      </div>
      <CategoryTable data={data} />
    </>
  );
};

export default Index;
