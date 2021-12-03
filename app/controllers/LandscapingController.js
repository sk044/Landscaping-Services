const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/database');

exports.findGardener = async (req, res)=>{

    console.log("req");
    console.log(req.query.areaCode);
    const gardeners = await sequelize.query(
        
    `select gardener_3.emp_id, gardener_3.name, gardener_3.phone from gardener_3
    inner join
    gardener_area on gardener_3.emp_id = gardener_area.emp_id
    inner join area on gardener_area.areaCode = area.areaCode
    where
    area.areaCode = '${req.query.areaCode}'
    `,

    { type: QueryTypes.SELECT });
    console.log(gardeners);
    res.send(gardeners);
    
}

exports.findGardenerAttendance = async (req, res)=>{


    const attendance = await sequelize.query(
    `
    select count(*) as No_of_Days
    from roster2
    where emp_id = '${req.query.emp_id}'
    and extract(month from DATE) = '${req.query.month}'
    and extract(year from DATE) = '${req.query.year}'
    
    `, { type: QueryTypes.SELECT });
    console.log(attendance);
    res.send(attendance);
    
}

exports.monthlyRoster = async (req, res)=>{


    const roster = await sequelize.query(
    `
    select roster2.dr_job_id, roster2.date, roster2.emp_id, gardener_3.name, gardener_3.phone from roster2
    inner join gardener_3 on gardener_3.emp_id = roster2.emp_id 
    where extract(month from date) = '${req.query.month}'
    and extract(year from DATE) = '${req.query.year}'
    
    `, { type: QueryTypes.SELECT });
    console.log(roster);
    res.send(roster);
    
}

exports.trackRequestbyId = async (req, res)=>{

    const requests = await sequelize.query(
    `
    select status from request_3 where request_id = '${req.query.request_ID}'

    `, { type: QueryTypes.SELECT });
    console.log(requests);
    res.send(requests);
    
}

exports.trackbyStatus = async (req, res)=>{

    const requests = await sequelize.query(
    `
    select * from request_3
    where status = ${req.query.Status};

    `, { type: QueryTypes.SELECT });
    console.log(requests);
    res.send(requests);
    
}

exports.trackEquipRequestbyId = async (req, res)=>{

    console.log(req.query.equip_id);

    const equipment = await sequelize.query(
    `
    select equip_id, name, status from equipment_1 where Equip_id = '${req.query.equip_id}'

    `, { type: QueryTypes.SELECT });
    console.log(equipment);
    res.send(equipment);
    
}

exports.trackEquipbyStatus = async (req, res)=>{

    const equipments = await sequelize.query(
    `
    select Equip_id, Name
    from equipment_1
    where status = '${req.query.Status}';

    `, { type: QueryTypes.SELECT });
    console.log(equipments);
    res.send(equipments);
    
}

exports.gardenerRoster = async (req, res)=>{

    const groster = await sequelize.query(
    `
    select gardener_3.emp_id, roster2.date, roster2.shiftstarttime, roster2.shiftendtime
    from roster2 inner join gardener_3 on gardener_3.emp_id = roster2.emp_id
    where roster2.emp_id = 'G102';

    `, { type: QueryTypes.SELECT });
    console.log(groster);
    res.send(groster);
    
}
