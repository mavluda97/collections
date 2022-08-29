import React, { useState, useRef, useEffect } from "react";
import Validator from "validatorjs";
import {
  Box,
  Grid,
  TextField,
  Typography,
  InputBase,
  Button,
  Chip,
  InputAdornment,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckIcon from "@mui/icons-material/Check";
import Check from "@mui/icons-material/Check";

import AdditionalFieldTypography from "../components/AdditionalFieldTypography";

import { getCategories } from "../../../fetch/apies";

function CreateCollection() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  // name
  const [nameInputs, setNameInputs] = useState({
    email: "",
    rule: "required",
    startValidate: false,
  });

  const validationName = new Validator(
    { name: nameInputs.name },
    { name: nameInputs.rule }
  );

  const handleName = (e) => {
    setNameInputs((prevState) => ({
      ...prevState,
      name: e.target.value,
      startValidate: true,
    }));
  };

  // description
  const [descriptionInputs, setDescriptionInputs] = useState({
    description: "",
    rule: "required",
    startValidate: false,
  });

  const validationDescription = new Validator(
    { description: descriptionInputs.description },
    { description: descriptionInputs.rule }
  );

  const handleDescription = (e) => {
    setDescriptionInputs((prevState) => ({
      ...prevState,
      description: e.target.value,
      startValidate: true,
    }));
  };

  // category
  const [categoryInputs, setCategoryInputs] = useState({
    category: "",
    rule: "required",
    startValidate: false,
  });

  const validationCategory = new Validator(
    { category: categoryInputs.category },
    { category: categoryInputs.rule }
  );

  const handleCategory = (e) => {
    setCategoryInputs((prevState) => ({
      ...prevState,
      category: e.target.value,
      startValidate: true,
    }));
  };

  // Additional fields
  const stringRef = useRef("");
  const [stringTyping, setStringTyping] = useState(false);
  const [stringFields, setStringFields] = useState([]);

  const dateRef = useRef("");
  const [dateTyping, setDateTyping] = useState(false);
  const [dateFields, setDateFields] = useState([]);

  const boolRef = useRef("");
  const [boolTyping, setBoolTyping] = useState(false);
  const [booleanFields, setBooleanFields] = useState([]);

  const handleStringInput = (e) => {
    if (e.target.value.length > 0) {
      setStringTyping(true);
    } else {
      setStringTyping(false);
    }
  };

  const handleStringField = (e) => {
    e.preventDefault();
    console.log(stringRef.current.value);
    setStringFields((prevState) => [...prevState, stringRef.current.value]);
    setStringTyping(false);
    stringRef.current.value = "";
  };

  const handleDateInput = (e) => {
    if (e.target.value.length > 0) {
      setDateTyping(true);
    } else {
      setDateTyping(false);
    }
  };

  const handleDateField = (e) => {
    e.preventDefault();
    console.log(dateRef.current.value);
    setDateFields((prevState) => [...prevState, dateRef.current.value]);
    setDateTyping(false);
    dateRef.current.value = "";
  };

  const handleBooleanInput = (e) => {
    if (e.target.value.length > 0) {
      setBoolTyping(true);
    } else {
      setBoolTyping(false);
    }
  };

  const handleBooleanField = (e) => {
    e.preventDefault();
    console.log(boolRef.current.value);
    setBooleanFields((prevState) => [...prevState, boolRef.current.value]);
    setBoolTyping(false);
    boolRef.current.value = "";
  };

  const createCollectionBtn = (e) => {
    e.preventDefault();

    if (
      validationName.passes() &&
      validationDescription.passes() &&
      validationCategory.passes()
    ) {
    } else {
      setNameInputs((prevState) => ({
        ...prevState,
        startValidate: true,
      }));
      setDescriptionInputs((prevState) => ({
        ...prevState,
        startValidate: true,
      }));
      setCategoryInputs((prevState) => ({
        ...prevState,
        startValidate: true,
      }));
    }
  };

  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography variant="body2" mb={1} color="#919aa3">
            Collection Image:
          </Typography>
          <label htmlFor="collection-image">
            <Box
              height="235px"
              sx={{
                borderRadius: "5px",
                cursor: "pointer",
                background: "#e8f4ff",
                color: "#1976d2",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              +
            </Box>
          </label>
          <input
            type="file"
            id="collection-image"
            name="collection-image"
            accept="image/png, image/jpeg"
            style={{ display: "none " }}
          />

          <FormControl fullWidth>
            <Typography variant="body2" mb={1} mt={2} color="#919aa3">
              Name:
            </Typography>
            <TextField
              fullWidth
              id="outlined-required"
              size="small"
              value={nameInputs.name}
              onChange={handleName}
              error={
                nameInputs.startValidate &&
                (validationName.passes() === true ? false : true)
              }
            />
            <FormHelperText error sx={{ ml: 0 }}>
              {nameInputs.startValidate && validationName.errors.first("name")}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <Typography variant="body2" mb={1} mt={2} color="#919aa3">
              Description:
            </Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={4}
              value={descriptionInputs.description}
              onChange={handleDescription}
              error={
                descriptionInputs.startValidate &&
                (validationDescription.passes() === true ? false : true)
              }
            />
            <FormHelperText error sx={{ ml: 0 }}>
              {descriptionInputs.startValidate &&
                validationDescription.errors.first("description")}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <Typography variant="body2" mb={1} mt={2} color="#919aa3">
              Topic:
            </Typography>
            <Select
              fullWidth
              size="small"
              value={categoryInputs.category}
              onChange={handleCategory}
              error={
                categoryInputs.startValidate &&
                (validationCategory.passes() === true ? false : true)
              }
            >
              {categories.length > 0 &&
                categories.map((el) => (
                  <MenuItem sx={{ color: "#919aa3" }} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
            </Select>
            <FormHelperText error sx={{ ml: 0 }}>
              {categoryInputs.startValidate &&
                validationCategory.errors.first("category")}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <AdditionalFieldTypography
            variant="body2"
            title="Add additional fields:"
            marginLeft={true}
          />
          <Box my={2}>
            <Box display="flex">
              <CreateIcon fontSize="small" sx={{ color: "#919aa3" }} />
              <AdditionalFieldTypography
                variant="subtitle2"
                title="String fields"
              />
            </Box>
            {stringFields &&
              stringFields.map((el) => (
                <Box display="flex" alignItems="center" ml={5} mt={1}>
                  <CreateIcon fontSize="12px" sx={{ color: "#919aa3" }} />
                  <AdditionalFieldTypography variant="subtitle2" title={el} />
                </Box>
              ))}
            {stringFields && stringFields.length < 3 && (
              <Box display="flex" alignItems="center" ml={5}>
                {stringTyping ? (
                  <CreateIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" sx={{ color: "#aeaeae" }} />
                )}
                <InputBase
                  sx={{ ml: 1, fontSize: "14px" }}
                  inputRef={stringRef}
                  placeholder="New item"
                  onChange={handleStringInput}
                  endAdornment={
                    stringTyping && (
                      <InputAdornment position="end">
                        <Check
                          fontSize="small"
                          sx={{ cursor: "pointer" }}
                          onClick={(e) => handleStringField(e)}
                        />
                      </InputAdornment>
                    )
                  }
                />
              </Box>
            )}
          </Box>
          <Box my={2}>
            <Box display="flex">
              <CalendarMonthIcon fontSize="small" sx={{ color: "#aeaeae" }} />
              <AdditionalFieldTypography
                variant="subtitle2"
                title="Date fields"
              />
            </Box>
            {dateFields &&
              dateFields.map((el) => (
                <Box display="flex" alignItems="center" ml={5} mt={1}>
                  <CalendarMonthIcon
                    fontSize="12px"
                    sx={{ color: "#919aa3" }}
                  />
                  <AdditionalFieldTypography variant="subtitle2" title={el} />
                </Box>
              ))}
            {dateFields && dateFields.length < 3 && (
              <Box display="flex" alignItems="center" ml={5} mt={1}>
                {dateTyping ? (
                  <CalendarMonthIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" sx={{ color: "#aeaeae" }} />
                )}
                <InputBase
                  sx={{ ml: 1, fontSize: "14px" }}
                  inputRef={dateRef}
                  placeholder="New item"
                  onChange={handleDateInput}
                  endAdornment={
                    dateTyping && (
                      <InputAdornment position="end">
                        <Check
                          sx={{ cursor: "pointer" }}
                          onClick={(e) => handleDateField(e)}
                        />
                      </InputAdornment>
                    )
                  }
                />
              </Box>
            )}
          </Box>
          <Box my={2}>
            <Box display="flex">
              <CheckBoxIcon fontSize="small" sx={{ color: "#aeaeae" }} />
              <AdditionalFieldTypography
                variant="subtitle2"
                title="CheckBox fields"
              />
            </Box>
            {booleanFields &&
              booleanFields.map((el) => (
                <Box display="flex" alignItems="center" ml={5} mt={1}>
                  <CheckBoxIcon fontSize="12px" sx={{ color: "#aeaeae" }} />
                  <AdditionalFieldTypography variant="subtitle2" title={el} />
                </Box>
              ))}
            {booleanFields && booleanFields.length < 3 && (
              <Box display="flex" alignItems="center" ml={5} mt={1}>
                {boolTyping ? (
                  <CheckBoxIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" sx={{ color: "#aeaeae" }} />
                )}
                <InputBase
                  sx={{ ml: 1, fontSize: "14px" }}
                  inputRef={boolRef}
                  placeholder="New item"
                  onChange={handleBooleanInput}
                  endAdornment={
                    boolTyping && (
                      <InputAdornment position="end">
                        <Check
                          sx={{ cursor: "pointer" }}
                          onClick={(e) => handleBooleanField(e)}
                        />
                      </InputAdornment>
                    )
                  }
                />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              background: "rgb(52, 71, 103)",
              textTransform: "none",
              boxShadow: "none",
              "&:hover, &:active, &:focus": {
                boxShadow: "none",
                backgroundColor: "rgba(52, 71, 103, 0.9)",
              },
            }}
            onClick={(e) => createCollectionBtn(e)}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateCollection;
