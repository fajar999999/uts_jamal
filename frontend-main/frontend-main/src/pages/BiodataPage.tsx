import MainLayout from "../layouts/MainLayout";

const BiodataPage = () => {
  return (

    <MainLayout>

      <div className="bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-5">
          Biodata Mahasiswa
        </h1>

        <div className="space-y-3 text-lg">

          <p>
            Nama:
            Muhammad Fajar Ramadhan 
          </p>

          <p>
            NIM:
            24090133
          </p>

          <p>
            Mata Kuliah:
            Pemrograman Web
          </p>

        </div>

      </div>

    </MainLayout>
  );
};

export default BiodataPage;