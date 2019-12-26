import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, Button } from "react-native";
import Carousel from "react-native-snap-carousel";

// const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>`;

class App extends Component {
  _carousel = React.createRef();
  constructor() {
    super();

    this.state = {
      current: "",
      rooms: [
        {
          showSubCombo: false,
          room: "Quarto",
          width: 140,
          img:
            "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fstove.svg?alt=media&token=7b523bc4-9c58-4e20-afa0-de9baffad7fa",
          id: "quarto",
          qtty: 0,
          forniture: [
            {
              name: "Sofá",
              id: "quarto.sofa",
              dimensions: [
                {
                  name: "3 lugares",
                  measure: { x: 120, y: 140, z: 160 }
                },
                {
                  name: "4 lugares",
                  measure: { x: 120, y: 140, z: 160 }
                }
              ]
            },
            {
              name: "Mesa",
              id: "quarto.mesa",
              dimensions: [
                {
                  name: "4 cadeiras",
                  measure: { x: 120, y: 140, z: 160 }
                },
                {
                  name: "6 cadeiras",
                  measure: { x: 120, y: 140, z: 160 }
                }
              ]
            }
          ]
        },
        {
          room: "Sala de Jantar",
          width: 100,
          img:
            "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Ftable-small.svg?alt=media&token=46942151-310e-447b-9ce2-f53194a78672",
          id: "salajantar",
          qtty: 0,
          forniture: [
            {
              name: "Cama",
              id: "quarto.sofa",
              dimensions: [
                {
                  name: "Solteiro",
                  measure: { x: 120, y: 140, z: 160 }
                },
                {
                  name: "Casal",
                  measure: { x: 120, y: 140, z: 160 }
                }
              ]
            },
            {
              name: "Armario",
              id: "quarto.mesa",
              dimensions: [
                {
                  name: "2 portas",
                  measure: { x: 120, y: 140, z: 160 }
                },
                {
                  name: "4 portas",
                  measure: { x: 120, y: 140, z: 160 }
                }
              ]
            }
          ]
        },
        {
          room: "Sala de Estar",
          width: 150,
          img:
            "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fsofa.svg?alt=media&token=a15bdb92-5a1a-443a-a76e-ab3e6c968a33",
          id: "salaestar",
          qtty: 0
        }
        // {
        //   room: "Cozinha",
        //   width: 130,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fstove.svg?alt=media&token=7b523bc4-9c58-4e20-afa0-de9baffad7fa",
        //   id: "cozinha",
        //   qtty: 0
        // },
        // {
        //   room: "Varanda",
        //   width: 125,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Foutdoor-cafe.svg?alt=media&token=5c9b7d0b-e1f1-42b1-b228-15a0ad4186f9",
        //   id: "varanda",
        //   qtty: 0
        // },
        // {
        //   room: "Banheiro",
        //   width: 140,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fstove.svg?alt=media&token=7b523bc4-9c58-4e20-afa0-de9baffad7fa",
        //   id: "banheiro",
        //   qtty: 0
        // },
        // {
        //   room: "Area de Serviço",
        //   width: 140,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fstove.svg?alt=media&token=7b523bc4-9c58-4e20-afa0-de9baffad7fa",
        //   id: "areaservico",
        //   qtty: 0
        // },
        // {
        //   room: "Copa",
        //   width: 140,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Foutdoor-cafe.svg?alt=media&token=5c9b7d0b-e1f1-42b1-b228-15a0ad4186f9",
        //   id: "copa",
        //   qtty: 0
        // },
        // {
        //   room: "Corredor",
        //   width: 160,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Foutdoor-cafe.svg?alt=media&token=5c9b7d0b-e1f1-42b1-b228-15a0ad4186f9",
        //   id: "corredor",
        //   qtty: 0
        // },
        // {
        //   room: "Escritório",
        //   width: 130,
        //   img:
        //     "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fsofa.svg?alt=media&token=a15bdb92-5a1a-443a-a76e-ab3e6c968a33",
        //   id: "escritorio",
        //   qtty: 0
        // }
      ],
      currentItem: {},
      subitemslist: []
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ height: 300 }}>
        <Text>Informe o conteúdo do comôdo {item.room}</Text>
        <Picker
          style={{ height: 50, width: 100 }}
          onValueChange={(value, itemIndex) => {
            this._renderSubItem(
              item.forniture && item.forniture[itemIndex].dimensions
                ? item.forniture[itemIndex].dimensions
                : null
            );
          }}
        >
          {item.forniture &&
            item.forniture.map((itemf, rowf) => {
              return <Picker.Item key={rowf} label={itemf.name} />;
            })}
        </Picker>
        {this.state.subitemslist}
        <Button title="Adicionar" />
      </View>
    );
  };

  _renderSubItem = dimensions => {
    /**jogar o retorno deste método dentro de uma lista e desenhar diretamente */
    if (dimensions) console.log("forniture", dimensions);

    var subitemslist = [];

    if (dimensions) {
      subitemslist.push(
        <Picker
          style={{ height: 50, width: 100 }}
          onValueChange={(value, itemIndex) => {
            this.changeState(value);
          }}
        >
          {dimensions.map((item, row) => {
            return <Picker.Item key={row} label={item.name} />;
          })}
        </Picker>
      );
    }

    this.setState({
      subitemslist: subitemslist
    });
  };

  scrollCarousel = item => {
    console.log("scroll", item);
  };

  goToNextSlide = () => {
    this._carousel.current.snapToNext();
  };

  render() {
    return (
      <View>
        <Carousel
          ref={this._carousel}
          onBeforeSnapToItem={slideIndex => {
            alert("snap item");
          }}
          data={this.state.rooms}
          renderItem={this._renderItem}
          sliderWidth={280}
          sliderHeight={300}
          itemWidth={250}
          itemHeight={300}
          extraData={this.state}
        />
        <View style={{ position: "absolute", bottom: 0, right: 0 }}>
          <Button title="Próximo" onPress={this.goToNextSlide} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
