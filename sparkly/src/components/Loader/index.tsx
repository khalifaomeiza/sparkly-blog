interface ILoader {
  height?: string;
}
const Loader = ({ height }: ILoader) => (
  <img
    style={{
      objectFit: 'contain',
      height: height || '80px'
    }}
    src="https://publicpayfiimages.s3.amazonaws.com/randomAsset/gif_loader_Loader.gif"
    alt=""
  />
);

export default Loader;
