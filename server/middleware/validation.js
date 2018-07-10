/**
 * @exports
 * @class Validations
 */
class Validations {

    /**
      * Validate entries
      *
      * @staticmethod
      * @param  {object} req - Request object
      * @param {object} res - Response object
      * @param {function} next - middleware next (for error handling)
      * @return {json} res.json
      */
     static validateEntry(req, res) {
       const regex = /^[a-zA-Z0-9-. ]+( [a-zA-Z0-9-. ]+)*$/i;
   
       const {title, entry, img} = req.body; 
       if (typeof title !== 'string' || title.length < 1 || regex.test(title) === false) {
         return "Cross-check your title input"
       } 
       if (typeof entry !== 'string'|| entry.length < 1 || regex.test(entry) === false) {
         return 'Cross-check your entry input'
       }
       if (img.length > 1 && typeof img !== 'string') {
         return 'Check the image'
       }
       return {title,entry,img}
     }
   }
   
   export default Validations;