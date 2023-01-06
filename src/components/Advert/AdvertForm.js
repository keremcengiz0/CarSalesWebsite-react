import React from 'react';
import { TextField, Button } from '@material-ui/core';

function AdvertForm() {
  const [formData, setFormData] = React.useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/adverts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="description"
        label="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="title"
        label="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="brand"
        label="Brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="series"
        label="Series"
        value={formData.series}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="model"
        label="Model"
        value={formData.model}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="year"
        label="Year"
        value={formData.year}
        onChange={handleChange}
        type="number"
      />
      <br />
      <TextField
        name="fuel"
        label="Fuel"
        value={formData.fuel}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="km"
        label="Km"
        value={formData.km}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="price"
        label="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AdvertForm;
