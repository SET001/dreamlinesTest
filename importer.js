const {map, zipObj} = require('ramda')
const parse = require('csv-parse')
const config = {
	delimiter: ',',
	quote: '"',
	skip_empty_lines: true,
	trim: true,
	relax: true,
	relax_column_count: true
}

module.exports = csv =>	new Promise((resolve, reject)=>
	parse(csv, config, (err, output)=>{
		const headers = output.shift()
		resolve(map(data=> {
			const obj = zipObj(headers, data)
			if (obj.date_visit){
				const [date, month, year] = obj.date_visit.split('-')
				const newDate = new Date(year,month, date)
				obj.date_visit = newDate
			}
			return obj
		}, output))
	})
)