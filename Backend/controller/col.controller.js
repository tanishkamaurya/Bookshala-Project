import Col from "../model/col.model.js";

export const submit = async (req, res) => {
    try {
        const { name, bookname, pdf } = req.body;

        const createdCol = new Col({
            name,
            bookname,
            pdf
        });

        await createdCol.save(); 

        res.status(201).json({ message: "Book saved successfully",
        user:{
        _id :createdCol._id,
        name:createdCol.name,
        bookname:createdCol.email,
        pdf:createdCol.pdf
        },
    
    });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
