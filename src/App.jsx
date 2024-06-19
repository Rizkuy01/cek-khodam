/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const ListKhodam = [
  "Sepeda Listrik",
  "Harimau Sumatra",
  "Kereta Api",
  "Macan Garut",
  "Domba Kuring",
  "Singa",
  "Gedung Fasilkom",
  "Jerapah",
  "Kucing Oren",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Ayam Geprek Sriwedari",
  "Tunas Kelapa",
  "Kambing Guling",
  "Babi Hutan",
  "Cangkul",
  "Abe",
  "Pop Mie",
  "Aligator",
  "Tisu Basah",
  "Galon",
  "Ember",
  "Tusuk Sate",
  "Dont Look Back in Anger",
  "Radiohead",
];

export default function App() {
  const [nama, setNama] = useState("");
  const [khodamImageUrl, setKhodamImageUrl] = useState("");
  const [khodam, setKhodam] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = () => {
    if (nama) {
      const filteredKhodam = ListKhodam.filter((k) => k);
      const randomKhodam =
        filteredKhodam[Math.floor(Math.random() * filteredKhodam.length)];
      let imageUrl = "";
      setKhodam(randomKhodam);
      if (randomKhodam === "Tidak Ada") {
        imageUrl = "/img/tidakada.jpeg";
      } else {
        const formattedKhodam = randomKhodam.toLowerCase().replace(/ /g, "-");
        imageUrl = `/img/${encodeURIComponent(formattedKhodam)}.jpeg`;
      }

      setKhodamImageUrl(imageUrl);
      handleOpen();
    }
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: "url('/img/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-md">
        <div className="bg-blue-900 p-5 rounded-lg shadow-xl bg-opacity-90">
          <h1 className="text-5xl font-bold text-white">Check Khodam</h1>
          <div className="w-full mt-10">
            <Input
              label="Nama"
              color="green"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              error={!nama}
              style={{ color: "white" }}
              className="border-black"
            />
            <Button className="w-full mt-5" onClick={handleSubmit}>
              Submit
            </Button>
            <div className="mt-5">
              <p className="italic text-center text-white">
                Created by wiskiii
              </p>
            </div>
            <Result
              open={open}
              handleOpen={handleOpen}
              nama={nama}
              khodam={khodamImageUrl}
              namaKhodam={khodam}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Result({ open, handleOpen, nama, khodam, namaKhodam }) {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="max-h-[90vh] overflow-y-scroll"
    >
      <DialogHeader>Hasil</DialogHeader>
      <DialogBody>
        <h3 className="text-xl font-medium">Nama: {nama}</h3>
        <h4 className="text-xl font-medium">
          Khodam: <span className="font-semibold">{namaKhodam}</span>
        </h4>
        <div className="flex justify-center">
          <img
            src={khodam}
            alt={namaKhodam}
            className="mt-5 rounded-lg shadow-md text-center justify-center"
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
