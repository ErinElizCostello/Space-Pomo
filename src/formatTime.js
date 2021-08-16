export const formatTime = (seconds) =>
  seconds < 10 ?
    `00:0${seconds}`
    : seconds < 60 ?
      `00:${seconds}`
      : seconds > 59 && seconds < 600 && seconds % 60 < 10 ?
        `0${(seconds - (seconds % 60)) / 60}:0${seconds % 60}`
        : seconds > 59 && seconds < 600 && seconds % 60 > 9 ?
          `0${(seconds - (seconds % 60)) / 60}:${seconds % 60}`
          : seconds > 599 && seconds % 60 < 10 ?
            `${(seconds - seconds % 60) / 60}:0${seconds % 60}`
            : seconds > 599 && seconds % 60 > 9 ?
              `${(seconds - seconds % 60) / 60}:${seconds % 60}`
              : null