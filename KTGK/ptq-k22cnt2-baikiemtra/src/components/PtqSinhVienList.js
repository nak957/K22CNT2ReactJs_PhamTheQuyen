// src/components/PtqSinhVienList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PtqSinhVienList = () => {
  const [sinhVienList, setPtqSinhVienList] = useState([]);
  useEffect(() => {
    const fetchPtqSinhVienList = async () => {
      try {
        const response = await axios.get('https://667cd5f93c30891b865dda0b.mockapi.io/ptqApi/V1/PtqSinhVien'); 
        setPtqSinhVienList(response.data);
      } catch (error) {
        console.error('Error fetching sinh vien list:', error);
      }
    };

    fetchPtqSinhVienList();
  }, []);

  const PtqhandleEdit = (id) => {
    console.log(`Sửa sinh viên ${id}`);
   
  };

  const PtqhandleDelete = (id) => {
    console.log(`Xóa sinh viên ${id}`);
    
  };

  const PtqhandleAddNew = () => {
    console.log('Thêm mới sinh viên');
    
  };

  return (
    <div>
      <h2>Danh sách Sinh viên</h2>
      <button onClick={PtqhandleAddNew}>Thêm mới</button>
      <ul>
        {sinhVienList.map((ptqsinhVien) => (
          <li key={ptqsinhVien.PtqMaSV}>
            <div>
              Mã số sinh viên: {ptqsinhVien.PtqMaSV}
              Họ và tên:<strong>{ptqsinhVien.PtqHoSV} {ptqsinhVien.PtqTenSV}</strong> 
              Ngày Sinh:{ptqsinhVien.PtqNgaySinh} 
              Nơi Sinh:{ptqsinhVien.PtqNoiSinh}              
              Khoa: {ptqsinhVien.PtqMaKH} -
              Điểm TB: {ptqsinhVien.PtqDiemTrungBinh}            
              Học bổng: {ptqsinhVien.PtqHocBong}
              Giới tính: {ptqsinhVien.PtqPhai}
            </div>
            <button onClick={() => PtqhandleEdit(ptqsinhVien.PtqMaSV)}>Sửa</button>
            <button onClick={() => PtqhandleDelete(ptqsinhVien.PtqMaSV)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PtqSinhVienList;
