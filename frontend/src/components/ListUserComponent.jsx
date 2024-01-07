import React, { Component } from "react";
import UserService from "../services/UserService";
import { Modal, Button } from 'react-bootstrap';
import '../css/page.css'

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchKeyword: "", // Tambahkan searchKeyword ke dalam state
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.DeleteClose = this.DeleteClose.bind(this);
    this.DeleteConfirm = this.DeleteConfirm.bind(this);
  }

  deleteUser(id){
    this.setState({
      showModal : true,
      userIdDelete: id,
    });
  }

  DeleteConfirm(){
    const id = this.state.userIdDelete;

    UserService.deleteUser(id).then((res)=>{
      this.setState({
        users: this.state.users.filter((user)=>user.id !== id),
        showModal: false,
        userIdDelete: null,
      });
    });
  }

  DeleteClose(){
    this.setState({
      showModal: false,
      userIdDelete: null,
    });
  }


  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data === null || res.data.length === 0) {
        this.props.history.push("/add-user/_add");
      } else {
        this.setState({ users: res.data });
      }
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    const totalUsers = this.state.users.length;
    const filteredUsers = (this.state.users || []).filter((user) =>
      user.nama && user.nama.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
    );
  
    return (
      <div>
        <h2 className="text-center pt-5" style={{ fontWeight: 'bold', fontSize: '50px' }}>Data Pasien Puskesmas</h2>
        <br />
  
        <div class="bar">
          <input class="searchbar" title="search" type="text" placeholder="Cari Nama pasien" value={this.state.searchKeyword}
            onChange={(e) => this.setState({ searchKeyword: e.target.value })}/>
        </div>

        <br />
  
        <div >
          {filteredUsers.length > 0 ? (
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th> Nama </th>
                  <th> Usia </th>
                  <th> Jenis Kelamin </th>
                  <th> Alamat </th>
                  <th> Deskripsi </th>
                  <th> Pasien Manajemen </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td> {user.nama} </td>
                    <td> {user.usia} </td>
                    <td> {user.jenis_kelamin} </td>
                    <td> {user.alamat} </td>
                    <td> {user.deskripsi} </td>
                    <td>
                      <button onClick={() => this.editUser(user.id)} className="btn btn-info" > Perbaharui </button>
                      <button onClick={() => this.viewUser(user.id)} className="btn btn-info" > Lihat </button>
                      <button onClick={() => this.deleteUser(user.id)} className="btn btn-danger" > Hapus </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p class="cari">Nama tidak ada</p>
          )}
        </div>
  
       
          <p>Total Data: {totalUsers}</p>
       
  
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUser}>
            Tambah Data
          </button>
        </div>
  
        <Modal show={this.state.showModal} onHide={this.DeleteClose}>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Hapus</Modal.Title>
          </Modal.Header>
          <Modal.Body> Apakah Anda yakin ingin menghapus data ini? </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.DeleteConfirm}> Ya, Hapus </Button>
            <Button variant="secondary" onClick={this.DeleteClose}> Batal </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ListUserComponent;
