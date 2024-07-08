// src/components/PtqSinhVienAddOrEdit.js

import React, { useState, useEffect } from 'react';

const PtqSinhVienAddOrEdit = ({ ptqsinhVien, onSave, onCancel }) => {
  const [ptqhoSV, setPtqHoSV] = useState('');
  const [ptqtenSV, setPtqTenSV] = useState('');
  const [ptqphai, setPtqPhai] = useState('');
  const [ptqngaySinh, setPtqNgaySinh] = useState('');
  const [ptqnoiSinh, setPtqNoiSinh] = useState('');
  const [ptqmaKH, setPtqMaKH] = useState('');
  const [ptqhocBong, setPtqHocBong] = useState('');
  const [ptqdiemTrungBinh, setPtqDiemTrungBinh] = useState('');
  const [ptqmaSV, setPtqMaSV] = useState('');

  useEffect(() => {
    if (ptqsinhVien) {
      setPtqHoSV(ptqsinhVien.PtqHoSV || '');
      setPtqTenSV(ptqsinhVien.PtqTenSV || '');
      setPtqPhai(ptqsinhVien.PtqPhai || '');
      setPtqNgaySinh(ptqsinhVien.PtqNgaySinh || '');
      setPtqNoiSinh(ptqsinhVien.PtqNoiSinh || '');
      setPtqMaKH(ptqsinhVien.PtqMaKH || '');
      setPtqHocBong(ptqsinhVien.PtqHocBong || '');
      setPtqDiemTrungBinh(ptqsinhVien.PtqDiemTrungBinh || '');
      setPtqMaSV(ptqsinhVien.PtqMaSV || '');
    }
  }, [ptqsinhVien]);

  const PtqhandleSubmit = (e) => {
    e.preventDefault();
    const newSinhVien = {
      PtqHoSV: ptqhoSV,
      PtqTenSV: ptqtenSV,
      PtqPhai: ptqphai,
      PtqNgaySinh: ptqngaySinh,
      PtqNoiSinh: ptqnoiSinh,
      PtqMaKH: ptqmaKH,
      PtqHocBong: ptqhocBong,
      PtqDiemTrungBinh: ptqdiemTrungBinh,
      PtqMaSV: ptqmaSV,
    };
    onSave(newSinhVien);
  };

  const PtqhandleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <h2>{ptqsinhVien ? 'Sửa thông tin Sinh viên' : 'Thêm mới Sinh viên'}</h2>
      <form onSubmit={PtqhandleSubmit}>
      <label>
          Mã sinh viên:
          <input
            type="text"
            value={ptqmaSV}
            onChange={(e) => setPtqMaSV(e.target.value)}
          />
        </label>
        <br />
        <label>
          Họ:
          <input
            type="text"
            value={ptqhoSV}
            onChange={(e) => setPtqHoSV(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tên:
          <input
            type="text"
            value={ptqtenSV}
            onChange={(e) => setPtqTenSV(e.target.value)}
          />
        </label>
        <br />
        <label>
          Giới tính:
          <input
            type="text"
            value={ptqphai}
            onChange={(e) => setPtqPhai(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ngày sinh:
          <input
            type="text"
            value={ptqngaySinh}
            onChange={(e) => setPtqNgaySinh(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nơi sinh:
          <input
            type="text"
            value={ptqnoiSinh}
            onChange={(e) => setPtqNoiSinh(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mã khoa:
          <input
            type="text"
            value={ptqmaKH}
            onChange={(e) => setPtqMaKH(e.target.value)}
          />
        </label>
        <br />
        <label>
          Học bổng:
          <input
            type="text"
            value={ptqhocBong}
            onChange={(e) => setPtqHocBong(e.target.value)}
          />
        </label>
        <br />
        <label>
          Điểm trung bình:
          <input
            type="text"
            value={ptqdiemTrungBinh}
            onChange={(e) => setPtqDiemTrungBinh(e.target.value)}
          />
        </label>
        <br />
        
        <button type="submit">{ptqsinhVien ? 'Lưu thay đổi' : 'Thêm mới'}</button>
        <button type="button" onClick={PtqhandleCancel}>Hủy</button>
      </form>
    </div>
  );
};

export default PtqSinhVienAddOrEdit;
