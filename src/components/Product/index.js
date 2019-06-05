import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import './style.css';
import Title from '../Title/Title';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Form from '../AddItem/AddItem';
import Items from '../../mockdata/Items';
import Item from '../ShowItem/ShowItem';
import ItemEdit from '../ItemEdit/ItemEdit';
import uuidv4 from 'uuid/v4';
import { orderBy as orderByld, filter as filterld } from 'lodash';

class Product extends Component {
  constructor(props) {
    super(props);
    let arrayLevel = [];
    if (Items.length > 0) {
      for (let i = 0; i < Items.length; i++) {
        if (arrayLevel.indexOf(Items[i].level) === -1) {
          arrayLevel.push(Items[i].level);
        }
      }
    }
    arrayLevel.sort(function (a, b) { return a - b });
    this.state = {
      arrayLevel: arrayLevel,
      items: Items,
      listItems: Items,
      showAddForm: false,
      showAlert: false,
      titleAlert: '',
      idAlert: '',

      indexEdit: 0,
      idEdit: '',
      nameEdit: '',
      levelEdit: 0,

      valueItem: '',
      levelItem: 0,

      sortType: '',
      sortOrder: '',
      valueSearch: ''
    }
  }

  componentWillMount() {
    console.log("componentWillMount da chay")
  }

  componentDidMount() {
    console.log("componentDidMount da chay")
  }

  renderItem = () => {
    let { items, idEdit, indexEdit, nameEdit, levelEdit, arrayLevel } = this.state;
    if (items.length === 0) {
      return <Item item={0} />
    }
    return items.map((item, index) => {
      if (item.id === idEdit) {
        return (
          <ItemEdit key={index}
            indexEdit={indexEdit}
            nameEdit={nameEdit}
            levelEdit={levelEdit}
            arrayLevel={arrayLevel}
            handleEditClickCancel={this.handleEditClickCancel}
            handleEditInputChange={this.handleEditInputChange}
            handleEditSelectChange={this.handleEditSelectChange}
            handleEditClickSubmit={this.handleEditClickSubmit} />
        )
      }
      return (< Item
        item={item}
        index={index}
        key={index}
        handleShowAlert={this.handleShowAlert}
        handleEditItem={this.handleEditItem}
      />)
    });
  }

  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item.id
    });
  }

  handleDeleteItem = () => {
    let { idAlert, items } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
    }

    this.setState({
      showAlert: false,
      items: items
    });
  }

  handleEditItem = (index, item) => {
    this.setState({
      indexEdit: index,
      idEdit: item.id,
      nameEdit: item.name,
      levelEdit: item.level
    });
  }

  handleEditClickCancel = () => {
    this.setState({
      idEdit: ''
    });
  }

  handleEditInputChange = (value) => {
    this.setState({
      nameEdit: value
    });
  }

  handleEditSelectChange = (value) => {
    this.setState({
      levelEdit: value
    });
  }

  handleEditClickSubmit = () => {
    let { items, idEdit, nameEdit, levelEdit } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idEdit) {
          items[i].name = nameEdit;
          items[i].level = +levelEdit;
          break;
        }
      }
    }
    this.setState({
      idEdit: ''
    });
  }

  handleShowAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  }

  handleFormInputChange = (value) => {
    this.setState({
      valueItem: value
    });
  }

  handleFormSelectChange = (value) => {
    this.setState({
      levelItem: value
    });
  }

  handleFormClickCancel = () => {
    console.log('click cancel');
    this.setState({
      valueItem: '',
      levelItem: 0
    });
  }

  handleFormClickSubmit = () => {
    let { valueItem, levelItem } = this.state;
    if (valueItem.trim() === 0) return false;
    let newItem = {
      id: uuidv4(),
      name: valueItem,
      level: +levelItem
    };
    Items.push(newItem);
    this.setState({
      items: Items,
      valueItem: '',
      levelItem: 0,
      showAddForm: false
    });
  }

  handleSort = (sortType, sortOrder) => {
    this.setState({
      sortType: sortType,
      sortOrder: sortOrder
    });
    let { items } = this.state;
    this.setState({
      items: orderByld(items, [sortType], [sortOrder])
    });
  }

  handleSearch = (search) => {
    const listItems = this.state.listItems;
    let newArray = [];

    if (search.length === 0) {
      newArray = listItems;
    }
    if (search.length > 0) {
      search.toLowerCase();
      newArray = filterld(listItems, (item) => {
        return item.name.toLowerCase().indexOf(search) > -1;
      });
    }

    this.setState({
      items: newArray,
      valueSearch: search
    });
  }
  render() {
    return (
      <div className="container">
        <SweetAlert
          show={this.state.showAlert}
          title="Delete Item"
          text={this.state.titleAlert}
          showCancelButton
          onOutsideClick={() => this.setState({ showAlert: false })}
          onEscapeKey={() => this.setState({ showAlert: false })}
          onCancel={() => this.setState({ showAlert: false })}
          onConfirm={() => this.handleDeleteItem()}
        />
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search valueSearch={this.state.valueSearch}
              handleSearch={this.handleSearch}
            />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort sortType={this.state.sortType}
              sortOrder={this.state.sortOrder}
              handleSort={this.handleSort}
            />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button
              type="button"
              className="btn btn-info btn-block marginB10"
              onClick={this.handleShowAddForm}
            >{(this.state.showAddForm) ? 'Close Item' : 'Add Item'}</button>
          </div>
        </div>
        <div >
          <Form showAddForm={this.state.showAddForm}
            arrayLevel={this.state.arrayLevel}
            valueItem={this.state.valueItem}
            levelItem={this.state.levelItem}
            handleFormInputChange={this.handleFormInputChange}
            handleFormSelectChange={this.handleFormSelectChange}
            handleFormClickCancel={this.handleFormClickCancel}
            handleFormClickSubmit={this.handleFormClickSubmit}
          />
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">List Item</div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: '10%' }} className="text-center">#</th>
                <th>Name</th>
                <th style={{ width: '15%' }} className="text-center">Level</th>
                <th style={{ width: '15%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItem()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Product;
