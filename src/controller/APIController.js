import pool from "../configs/connectDB"

let getAllUsers = async (req, res) => {
    // http
    // nguyên tắc đầu tiên là phải trả về 1 status để biết được trạng thái server của chúng ta đang như thế nào
    // trạng thái 200: khi chúng ta kết nối thành công
    // trạng thái 404 not found: khi chúng ta không tìm thấy tài nguyên
    // trạng thái 501: khi server của chúng ta bị sập
    // ...
    // chuẩn format khi làm việc với API là JSON và XML
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', 
     [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok',
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    } 
    
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
     [firstName, lastName, email, address, id]);
    
    return res.status(200).json({
        message: 'ok',
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;

    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('delete from users where id = ?', [userId]);
    return res.status(200).json({
        message: 'ok',
    })
}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}