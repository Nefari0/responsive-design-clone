const noteBook = [{
    id:0,
    text:"this is a book with lots of textthis is a notebook with lots of textthis is a notebook with lots of text"
},]   

// const noteBook = []   

let note_id = 0

module.exports = {
    getItems: (req,res) => {
        res.status(200).send(noteBook)
    },

//-------------------------------------
    addItem: (req,res) => {
        const {text} = req.body
        const newItem = {id:note_id,text:req.body.text}
        noteBook.push(newItem)
        console.log(req.body)
        note_id += 1
        res.status(200).send(noteBook)
    },
//-------------------------------------
    deleteItem: (req, res) => {

        const { note_id } = req.params

        const index = noteBook.findIndex((element) => element.id === +note_id)

        noteBook.splice(index,1)
    
        res.status(200).send(noteBook)
      },
//------------------------------------
    editItem: (req,res) => {
        const { note_id } = req.params 

        const { input } = req.body
        const index = noteBook.findIndex((element) => element.id === +note_id)
        const anyName = {
            id:index,
            text:input
        }
        noteBook.splice(index,1,anyName)
        res.status(200).send(noteBook)
    } 
}
