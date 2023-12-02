"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
//relative path import
import Locations from "../Location/page";

//import images
import award1 from "@/assets/images/Group-18396.svg";
import award2 from "@/assets/images/award-2.svg";
import award3 from "@/assets/images/award-3.svg";
import award4 from "@/assets/images/award-4.svg";
import List from "@/assets/JsonData/CountryList.json";
//api
import axios from "axios";

export default function Talk() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  const onSave = async (data) => {
    const formData = new FormData();
    formData.append("file", data.picture);
    formData.append("firstName", data?.firstName);
    formData.append("lastName", data?.lastName);
    formData.append("budgetRange", data?.budgetRange);
    formData.append("email", data?.email);
    formData.append("description", data?.description);
    formData.append("country", data?.country);
    formData.append("phone", data?.phone);
    formData.append("tags", data?.tags);
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/v1/form/talkForm`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          reset();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <section id="lets-talk-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-12">
            <div className="lets-talk-content">
              <div className="lets-talk-head">
                <h2>{`LET'S TALK`}</h2>
                <h5>{`WE'RE READY`}</h5>
              </div>
              {/* <ul>
                <li>
                  <Image
                    priority="true"
                    alt="award-1"
                    className="img-fluid"
                    src={award1}
                  />
                </li>
                <li>
                  <Image
                    priority="true"
                    alt="award-2"
                    className="img-fluid"
                    src={award2}
                  />
                </li>
                <li>
                  <Image
                    priority="true"
                    alt="award-3"
                    className="img-fluid"
                    src={award3}
                  />
                </li>
                <li>
                  <Image
                    priority="true"
                    alt="award-4"
                    className="img-fluid"
                    src={award4}
                  />
                </li>
              </ul> */}
              <h4 className="mt-5">
                Start your digital transformation Journey
                <span>with us now!</span>
              </h4>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <form
              className="lets-talk-form"
              onSubmit={handleSubmit((data) => onSave(data))}
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-6 col-12">
                  <p>
                    <label htmlFor="fname">
                      First Name <span>*</span>
                    </label>
                    <input
                      id="fname"
                      {...register("firstName", { required: true })}
                    />
                  </p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6 col-12">
                  <p>
                    <label htmlFor="lname">
                      Last Name <span>*</span>
                    </label>
                    <input
                      id="lname"
                      {...register("lastName", { required: true })}
                    />
                  </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
                  <p>
                    <label htmlFor="email">
                      Your Email<span>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
                  <p>
                    <label htmlFor="phoneNo">Your Phone Number</label>
                    <span>
                      <select id="phoneNo" {...register("country")}>
                        <option value="india">India (+91)</option>
                        {List.map((opt, index) => (
                          <option
                            key={index}
                            onClick={() => console.log("Clicked", opt)}
                            value={opt.value}
                          >
                            {opt.label} ({opt.value})
                          </option>
                        ))}
                      </select>
                      <em>
                        {/* +91 */}
                        <span></span>
                        <input
                          id="phoneNo"
                          type="number"
                          {...register("phone")}
                        />
                      </em>
                    </span>
                  </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
                  <p>
                    <label htmlFor="projectabout">
                      {`What's your project about?`}
                      <span>*</span>
                    </label>
                    <textarea
                      id="projectabout"
                      {...register("description", { required: true })}
                    />
                  </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
                  <p>
                    <label htmlFor="budgetrange">Budget Range</label>
                    <select id="budgetrange" {...register("budgetRange")}>
                      <option disabled value="india">
                        Please Select
                      </option>
                      <option value="Less than $10,000">
                        Less than $10,000
                      </option>
                      <option value="$10,000 - $50,000">
                        $10,000 - $50,000
                      </option>
                      <option value="$50,000 - $100,000">
                        $50,000 - $100,000
                      </option>
                      <option value="$100,000+">$100,000+</option>
                    </select>
                  </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
                  <div className="lets-talk-form-checkbox">
                    <h5>
                      What Services are You Looking For?<em>*</em>
                    </h5>
                    <p>
                      <input
                        type="checkbox"
                        value="Mobile/Web App Development"
                        id="check1"
                        {...register("tags")}
                      />
                      <label htmlFor="check1">Mobile/Web App Development</label>
                      <br />
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        id="check2"
                        value="Hire Dedicated Developers"
                        {...register("tags")}
                      />
                      <label htmlFor="check2">Hire Dedicated Developers</label>
                      <br />
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        id="check3"
                        value="AI Integration"
                        {...register("tags")}
                      />
                      <label htmlFor="check3">AI Integration</label>
                      <br />
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        id="check4"
                        value="Custom Software Development"
                        {...register("tags")}
                      />
                      <label htmlFor="check4">
                        Custom Software Development
                      </label>
                      <br />
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        id="check6"
                        value="API Development"
                        {...register("tags")}
                      />
                      <label htmlFor="check6">
                        API Development &amp; Integration
                      </label>
                      <br />
                    </p>
                  </div>
                </div>
                <p>
                  <label htmlFor="file">File</label>
                  <input
                    type="file"
                    id="file"
                    {...register("picture")}
                    accept=".xlsx, .xls, image/*, .doc, .docx, .pdf"
                  />
                </p>
              </div>
              <div className="col-lg-12 col-12 text-center">
                <button type="submit" className="btn submit-btn">
                  Submit
                </button>
              </div>
              <div
                onClick={() =>
                  window.open("https://calendly.com/ppatel-0xm", "_blank")
                }
                className="col-lg-12 col-12 text-center"
              >
                <button className="btn submit-btn">Schedule A Meeting</button>
              </div>
            </form>
          </div>
        </div>
        <Locations />
      </div>
    </section>
  );
}
