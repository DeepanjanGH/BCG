import React, { useEffect, useState } from "react";
import { FormControl, InputGroup, ListGroup } from "react-bootstrap";

const Search = ({ list, handleItemClick, className }) => {
  const [listToRender, setListToRender] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const filterData = (value) => {
    let res = [];
    res = list.filter(
      (item) =>
        item["Policy_id"].toString().includes(value) ||
        item["Customer_id"].toString().includes(value)
    );
    return res;
  };

  const handleChange = (e) => {
    if (!showSearchBox) {
      setShowSearchBox(true);
    }
    setSearch(e.target.value);
    setListToRender(filterData(e.target.value));
  };

  return (
    <div className={`search-container ${className}`}>
      <InputGroup>
        <FormControl
          className='search-input'
          placeholder='Search Policy..'
          name='search'
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>
      {showSearchBox && search && (
        <ListGroup className='list-box'>
          {listToRender?.map((item) => {
            return (
              <ListGroup.Item
                onClick={() => {
                  setShowSearchBox(false);
                  setSearch(item.Policy_id);
                  handleItemClick(item);
                }}
              >
                {item["Policy_id"]}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default React.memo(Search);
