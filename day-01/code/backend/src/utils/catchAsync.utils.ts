export const catchAsync = (fn: Function) => {
  return (req: any, res: any, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch(()=>res.status(500).json({error:"error"}));
  };
};