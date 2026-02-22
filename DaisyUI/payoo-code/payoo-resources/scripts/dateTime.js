function updateAllDateTimes() {

  const elements = document.querySelectorAll(".dateTime");

  const now = new Date();

  // Bangladesh time
  const bdTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );

  elements.forEach(el => {

    const paymentDate = bdTime;

    const today = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);


    let dayText;

    if (paymentDate.toDateString() === today.toDateString()) {

      dayText = "Today";

    }
    else if (paymentDate.toDateString() === yesterday.toDateString()) {

      dayText = "Yesterday";

    }
    else {

      dayText = paymentDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });

    }


    const timeText = paymentDate.toLocaleTimeString("en-US", {

      hour: "2-digit",
      minute: "2-digit",
      hour12: true

    });


    el.innerText = `${dayText} ${timeText}`;

  });

}


// run
updateAllDateTimes();

