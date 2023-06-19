import { useState } from "react";

// components
import Smartphone from "./components/Smartphone";
import Header from "./components/Header";

// icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiArrowUpTray, HiArrowDownTray } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

const App = () => {
    const [form, setForm] = useState({
        id: 0,
        name: "",
        price: 0,
    });
    const [id, setId] = useState(0);
    const [smartphones, setSmartphones] = useState([
        {
            id: 1,
            name: "Samsung Galaxy S23 Ultra",
            price: 20000000,
        },
        {
            id: 2,
            name: "IPhone 14 Pro",
            price: 25000000,
        },
        {
            id: 3,
            name: "Google Pixel 3",
            price: 15000000,
        },
    ]);

    const [name, setName] = useState("");
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value],
        });
    };

    return (
        <div className="app-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>
            <div className="content-wrapper">
                <div className="smartphone-page">
                    {smartphones.map((smartphone) => (
                        <Smartphone
                            key={smartphone.id}
                            id={smartphone.id}
                            name={smartphone.name}
                            price={smartphone.price}
                        />
                    ))}
                </div>
                <div className="form-page">
                    <div className="card" style={{ width: 500 }}>
                        <h1>Add Smartphone</h1>
                        <form>
                            <label>
                                ID:
                                <input
                                    type="number"
                                    name="id"
                                    value={form.id}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Price:
                                <input
                                    type="number"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChange}
                                />
                            </label>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 10,
                                }}
                            >
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSmartphones([form, ...smartphones]);
                                    }}
									style={{ gap:10 }}
                                >
                                    <AiOutlinePlusCircle size={20} /> FRONT
                                    ADDED
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSmartphones([...smartphones, form]);
                                    }}
									style={{ gap:10 }}
                                >
                                    <AiOutlinePlusCircle size={20} /> BACK ADDED
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card" style={{ width: 500 }}>
                        <h1>Update Or Delete Smartphone</h1>
                        <form>
                            <label>
                                ID:
                                <input
                                    type="number"
                                    value={id}
                                    onChange={(e) =>
                                        setId(parseInt(e.target.value))
                                    }
                                />
                            </label>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setSmartphones(
                                            smartphones.map((smartphone) =>
                                                smartphone.id === id
                                                    ? {
                                                          ...smartphone,
                                                          name: name,
                                                      }
                                                    : smartphone
                                            )
                                        );
                                        setName(e.target.value);
                                    }}
                                />
                            </label>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 10,
                                }}
                            >
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSmartphones(
                                            smartphones.map((smartphone) =>
                                                smartphone.id === id
                                                    ? {
                                                          ...smartphone,
                                                          price:
                                                              smartphone.price +
                                                              1000000,
                                                      }
                                                    : smartphone
                                            )
                                        );
                                    }}

									style={{ gap:10 }}
                                >
                                    <HiArrowUpTray color="white" size={16} />{" "}
                                    INCREASE PRICE
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSmartphones(
                                            smartphones.map((smartphone) =>
                                                smartphone.id === id
                                                    ? {
                                                          ...smartphone,
                                                          price:
                                                              smartphone.price -
                                                              1000000,
                                                      }
                                                    : smartphone
                                            )
                                        );
                                    }}

									style={{ gap:10 }}
                                >
                                    <HiArrowDownTray color="white" size={16} />{" "}
                                    DECREASE PRICE
                                </button>
                            </div>
                            <button onClick={(e) => {
								e.preventDefault();
								setSmartphones(smartphones.filter((smartphone) => smartphone.id !== id))
							}}>DELETE</button>
                        </form>
                    </div>
					<div className="card">
						<h1>DELETE SMARTPHONE</h1>
						<button
							onClick={() => setSmartphones(smartphones.slice(1))}
							style={{ gap:10 }}
						><MdDelete size={16} /> REMOVE FRONT</button>
						<br />
						<button
							onClick={() => setSmartphones(smartphones.slice(0, -1))}
							style={{ gap:10 }}
						><MdDelete size={16} /> REMOVE BACK</button>
					</div>
                </div>
            </div>
        </div>
    );
};

export default App;
