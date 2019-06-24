import React, { Component } from 'react';
import Item from '../ShowItem/ShowItem';
import ItemEdit from '../ItemEdit/ItemEdit';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      idEdit: props.idEdit,
      indexEdit: props.indexEdit,
      nameEdit: props.nameEdit,
      levelEdit: props.levelEdit,
      arrayLevel: props.arrayLevel,
    };
  }

  handleEditItem = (index, item) => {
    this.setState({
      indexEdit: index,
      idEdit: item.id,
      nameEdit: item.name,
      levelEdit: item.level
    });
  };

  handleEditClickCancel = () => {
    this.setState({
      idEdit: ''
    });
  };

  handleEditInputChange = value => {
    this.setState({
      nameEdit: value
    });
  };

  handleEditSelectChange = value => {
    this.setState({
      levelEdit: value
    });
  };

  renderItem = () => {
    let {
      items,
      idEdit,
      indexEdit,
      nameEdit,
      levelEdit,
      arrayLevel
    } = this.state;
    console.log(idEdit);
    console.log(indexEdit);
    if (items.length === 0) {
      return <Item item={0} />;
    }
    return items.map((item, index) => {
      if (item.id === idEdit) {
        return (
          <ItemEdit
            key={index}
            indexEdit={indexEdit}
            nameEdit={nameEdit}
            levelEdit={levelEdit}
            arrayLevel={arrayLevel}
            handleEditClickCancel={this.handleEditClickCancel}
            handleEditInputChange={this.handleEditInputChange}
            handleEditSelectChange={this.handleEditSelectChange}
            handleEditClickSubmit={this.props.handleEditClickSubmit}
          />
        );
      }
      return (
        <Item
          item={item}
          index={index}
          key={index}
          handleShowAlert={this.props.handleShowAlert}
          handleEditItem={this.handleEditItem}
        />
      );
    });
  };

  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">
                #
              </th>
              <th>Name</th>
              <th style={{ width: '15%' }} className="text-center">
                Level
              </th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderItem()}</tbody>
        </table>
      </div>
    );
  }
}

export default ItemList;